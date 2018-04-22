from django.test import TestCase

from project.models import Membership, Organization, Actor


class MembershipTestCase(TestCase):
    def setUp(self):
        self.organization = Organization()
        self.organization.save()
        self.actor = Actor()
        self.actor.save()
        self.membership = Membership()
        self.membership.organization = self.organization
        self.membership.actor = self.actor
        self.membership.save()

    def tearDown(self):
        self.actor.delete()
        self.organization.delete()

    def test_actor_returns_actor(self):
        self.assertEquals(self.membership.actor_id, self.actor.id)
        self.assertEquals(self.membership.actor.id, self.actor.id)
        self.assertEquals(self.organization.actors.get().id, self.actor.id)

    def test_organization_returns_organization(self):
        self.assertEquals(self.membership.organization_id, self.organization.id)
        self.assertEquals(self.membership.organization.id, self.organization.id)
        self.assertEquals(self.actor.organizations.get().id, self.organization.id)
