from django.test import TestCase

from project.models import Project, Organization


class ProjectTestCase(TestCase):
    def setUp(self):
        self.org = Organization()
        self.org.save()
        self.project = Project(organization=self.org)
        self.project.save()

    def tearDown(self):
        self.org.delete()

    def test__project_organization__matches(self):
        self.assertEqual(self.project.organization, self.org)