from urllib.parse import urlencode

from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase

from project.models import Membership, Organization, Actor, Project
from project_api.tests.utils.date import format_iso8601


class ProjectsAPITestCase(APITestCase):
    projects_list_name = 'projects-list'
    projects_detail_name = 'projects-detail'

    def setUp(self):
        self.bran_user = User.objects.create_user(username="bran", email="bran@stark.com", password="1")
        self.sansa_user = User.objects.create_user(username="sansa", email="sansa@stark.com", password="1")
        self.jamie_user = User.objects.create_user(username="jamie", email="jamie@lannister.com", password="1")

        self.bran_actor = Actor(user_id=self.bran_user.id, name="bran")
        self.bran_actor.save()
        self.sansa_actor = Actor(user_id=self.sansa_user.id, name="sansa")
        self.sansa_actor.save()
        self.jamie_actor = Actor(user_id=self.jamie_user.id, name="jamie")
        self.jamie_actor.save()

        self.starks = Organization(name="starks")
        self.starks.save()
        self.lannisters = Organization(name="lannisters")
        self.lannisters.save()

        Membership(organization=self.starks, actor=self.bran_actor).save()
        Membership(organization=self.starks, actor=self.sansa_actor).save()
        Membership(organization=self.lannisters, actor=self.sansa_actor).save()
        Membership(organization=self.lannisters, actor=self.jamie_actor).save()

        self.winterfell = Project(organization=self.starks, name="winterfell")
        self.winterfell.save()
        self.kingslanding = Project(organization=self.lannisters, name="king's landing")
        self.kingslanding.save()
        self.casterlyrock = Project(organization=self.lannisters, name="casterly rock")
        self.casterlyrock.save()

    def tearDown(self):
        self.bran_actor.delete()
        self.sansa_actor.delete()
        self.jamie_actor.delete()
        self.starks.delete()
        self.lannisters.delete()
        self.bran_user.delete()
        self.sansa_user.delete()
        self.jamie_user.delete()

    def test__list_projects__lists_all_projects_from_organizations_actor_belongs(self):
        self.client.login(username="bran", password='1')
        response = self.client.get(reverse(self.projects_list_name))

        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, [
            {
                'id':           self.winterfell.id,
                'name':         self.winterfell.name,
                'organization': self.starks.id,
                'created':      format_iso8601(self.winterfell.created)
            }
        ])

    def test__list_projects__filters_on_name(self):
        self.client.login(username="sansa", password='1')
        url = reverse(self.projects_list_name) + '?' + urlencode({'name': 'king\'s landing'})
        response = self.client.get(url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, [
            {
                'id':           self.kingslanding.id,
                'name':         self.kingslanding.name,
                'organization': self.lannisters.id,
                'created':      format_iso8601(self.kingslanding.created)
            }
        ])

    def test__list_projects__filters_on_organization(self):
        self.client.login(username="sansa", password='1')
        url = reverse(self.projects_list_name) + '?' + urlencode({'organization': self.lannisters.id})
        response = self.client.get(url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, [
            {
                'id':           self.kingslanding.id,
                'name':         self.kingslanding.name,
                'organization': self.lannisters.id,
                'created':      format_iso8601(self.kingslanding.created)
            },
            {
                'id':           self.casterlyrock.id,
                'name':         self.casterlyrock.name,
                'organization': self.lannisters.id,
                'created':      format_iso8601(self.casterlyrock.created)
            }
        ])

    def test__projects_detail__returns_project(self):
        self.client.login(username="bran", password='1')
        url = reverse(self.projects_detail_name, kwargs={'pk': self.winterfell.id})
        response = self.client.get(url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, {
            'id':           self.winterfell.id,
            'name':         self.winterfell.name,
            'organization': self.starks.id,
            'created':      format_iso8601(self.winterfell.created)
        })

    def test__projects_detail__returns_404_when_project_unknown(self):
        self.client.login(username="bran", password='1')
        url = reverse(self.projects_detail_name, kwargs={'pk': self.casterlyrock.id})
        response = self.client.get(url)
        self.assertEquals(response.status_code, status.HTTP_404_NOT_FOUND)

    def test__projects_create__returns_project(self):
        self.client.login(username="bran", password='1')
        url = reverse(self.projects_list_name)
        name = 'greywater'
        post_data = {
            'organization': self.starks.id,
            'name':         name
        }
        response = self.client.post(url, post_data)
        self.assertEquals(response.status_code, status.HTTP_201_CREATED)
        self.assertEquals(response.data['name'], name)
        self.assertEquals(response.data['organization'], self.starks.id)

    def test__projects_create__forbids_adding_to_other_org(self):
        self.client.login(username="bran", password='1')
        url = reverse(self.projects_list_name)
        name = 'greywater'
        post_data = {
            'organization': self.lannisters.id,
            'name':         name
        }
        response = self.client.post(url, post_data)
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test__projects_update__forbids_adding_to_other_org(self):
        self.client.login(username="bran", password='1')
        url = reverse(self.projects_detail_name, kwargs={'pk': self.winterfell.id})
        data = {
            'organization': self.lannisters.id
        }
        response = self.client.patch(url, data)
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test__projects_put__forbids_adding_to_other_org(self):
        self.client.login(username="bran", password='1')
        url = reverse(self.projects_detail_name, kwargs={'pk': self.winterfell.id})
        data = {
            'organization': self.lannisters.id,
            'name':         'anything'
        }
        response = self.client.put(url, data)
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)
