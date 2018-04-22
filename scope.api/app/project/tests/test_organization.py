from django.test import TestCase

from project.models.organization import Organization


class OrganizationTestCase(TestCase):
    def setUp(self):
        pass

    def test__organization__class_exists(self):
        org = Organization()
        self.assertTrue(True)