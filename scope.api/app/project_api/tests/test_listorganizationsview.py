from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase

from project.models import Membership, Organization, Actor


class OrganizationsViewTestCase(APITestCase):

    def setUp(self):
        self.user = self.create_user()
        self.organization1 = Organization(name="tk1")
        self.organization1.save()
        self.organization2 = Organization(name="tk2")
        self.organization2.save()
        self.organization3 = Organization(name="tk3")
        self.organization3.save()
        self.actor = Actor(user_id=self.user.id)
        self.actor.save()
        self.membership1 = Membership(organization=self.organization1, actor=self.actor)
        self.membership1.save()
        self.membership2 = Membership(organization=self.organization2, actor=self.actor)
        self.membership2.save()

    def create_user(self):
        user = User.objects.create_user(username="john", email="john@snow.com", password="i_know_nothing")
        self.client.login(username='john', password='i_know_nothing')
        return user

    def tearDown(self):
        self.actor.delete()
        self.organization1.delete()
        self.organization2.delete()
        self.user.delete()

    def test_listOrganizations_listsAllOrganizationsUsersActorIsPartOf(self):
        response = self.client.get(reverse('organizations-list'))
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, [
            {
                'id':   self.organization1.id,
                'name': self.organization1.name
            },
            {
                'id':   self.organization2.id,
                'name': self.organization2.name
            }
        ])

    def test_readOrganization_returnsOrgIfUserIsPartOfIt(self):
        url = reverse('organizations-read', kwargs={'organization_id': self.organization1.id})
        response = self.client.get(url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, {
            'id':   self.organization1.id,
            'name': self.organization1.name
        })

    def test_readOrganization_doesNoteReturnOrgIfUserIsNotPartOfIt(self):
        url = reverse('organizations-read', kwargs={'organization_id': self.organization3.id})
        response = self.client.get(url)
        self.assertEquals(response.status_code, status.HTTP_404_NOT_FOUND)
