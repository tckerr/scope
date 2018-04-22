from django.test import TestCase

from project.models import Project


class ProjectTestCase(TestCase):
    def setUp(self):
        pass

    def test_project_class_exists(self):
        actor = Project()
        self.assertTrue(True)