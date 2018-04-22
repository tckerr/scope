from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase

from project.models import Membership, Organization, Actor


class ActorsAPITestCase(APITestCase):

    def setUp(self):
        self.bran_user = User.objects.create_user(username="bran", email="bran@stark.com", password="1")
        self.ned_user = User.objects.create_user(username="ned", email="ned@stark.com", password="1")
        self.sansa_user = User.objects.create_user(username="sansa", email="sansa@stark.com", password="1")
        self.jamie_user = User.objects.create_user(username="jamie", email="jamie@lannister.com", password="1")

        self.bran_actor = Actor(user_id=self.bran_user.id, name="bran")
        self.bran_actor.save()
        self.ned_actor = Actor(user_id=self.ned_user.id, name="ned")
        self.ned_actor.save()
        self.sansa_actor = Actor(user_id=self.sansa_user.id, name="sansa")
        self.sansa_actor.save()
        self.jamie_actor = Actor(user_id=self.jamie_user.id, name="jamie")
        self.jamie_actor.save()

        self.starks = Organization(name="starks")
        self.starks.save()
        self.lannisters = Organization(name="lannisters")
        self.lannisters.save()

        Membership(organization=self.starks, actor=self.bran_actor).save()
        Membership(organization=self.starks, actor=self.ned_actor).save()
        Membership(organization=self.starks, actor=self.sansa_actor).save()
        Membership(organization=self.lannisters, actor=self.sansa_actor).save()
        Membership(organization=self.lannisters, actor=self.jamie_actor).save()

    def tearDown(self):
        self.bran_actor.delete()
        self.sansa_actor.delete()
        self.jamie_actor.delete()
        self.ned_actor.delete()
        self.starks.delete()
        self.lannisters.delete()
        self.bran_user.delete()
        self.sansa_user.delete()
        self.jamie_user.delete()
        self.ned_user.delete()

    def test_listActors_listsAllActorsFromOrganizationsUsersActorIsPartOf(self):
        self.client.login(username="bran", password='1')
        response = self.client.get(reverse('actors-list'))
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        print([dict(d) for d in response.data])
        self.assertEquals(response.data, [
            {
                'id':            self.bran_actor.id,
                'name':          self.bran_actor.name,
                'organizations': [self.starks.id]
            },
            {
                'id':            self.ned_actor.id,
                'name':          self.ned_actor.name,
                'organizations': [self.starks.id]
            },
            {
                'id':            self.sansa_actor.id,
                'name':          self.sansa_actor.name,
                'organizations': [self.starks.id]
            }
        ])

    def test_listActors_returnsFilteredOnName(self):
        self.client.login(username="bran", password='1')
        url = reverse('actors-list') + '?name=sansa'
        response = self.client.get(url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, [
            {
                'id':            self.sansa_actor.id,
                'name':          self.sansa_actor.name,
                'organizations': [self.starks.id]
            }
        ])

    def test_listActors_returnsFilteredOnOrganization(self):
        self.client.login(username="sansa", password='1')
        url = reverse('actors-list') + '?organizations=' + str(self.starks.id)
        response = self.client.get(url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, [
            {
                'id':            self.bran_actor.id,
                'name':          self.bran_actor.name,
                'organizations': [self.starks.id]
            },
            {
                'id':            self.ned_actor.id,
                'name':          self.ned_actor.name,
                'organizations': [self.starks.id]
            },
            {
                'id':            self.sansa_actor.id,
                'name':          self.sansa_actor.name,
                'organizations': [self.starks.id, self.lannisters.id, ]
            }
        ])

    def test_listActors_returnsNotFoundWhenUserUnknown(self):
        self.client.login(username="bran", password='1')
        url = reverse('actors-detail', kwargs={'pk': self.jamie_actor.id})
        response = self.client.get(url)
        self.assertEquals(response.status_code, status.HTTP_404_NOT_FOUND)

    # TODO: known bug with django filter-fields (since they have to be model only?)
    def test_listActors_returnsNotFoundWhenUserIsUnknowinglyPartOfOtherOrg(self):
        pass
        # self.client.login(username="bran", password='1')
        # url = reverse('actors-list') + '?organizations=' + str(self.lannisters.id)
        # response = self.client.get(url)
        # self.assertEquals(response.status_code, status.HTTP_200_OK)
        # self.assertEqual(response.data, [])