from django.test import TestCase

from project.models.organization import Organization


class OrganizationTestCase(TestCase):
    def setUp(self):
        pass

    def test_organization_class_exists(self):
        org = Organization()
        self.assertTrue(True) 