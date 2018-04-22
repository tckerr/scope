from django.test import TestCase

from project.models import Project, Organization, Workstream


class WorkstreamTestCase(TestCase):
    def setUp(self):
        self.org = Organization()
        self.org.save()
        self.project = Project(organization=self.org)
        self.project.save()
        self.workstream = Workstream(project=self.project)
        self.workstream.save()

    def tearDown(self):
        self.org.delete()

    def test__workstream_project__matches(self):
        self.assertEqual(self.project, self.workstream.project)
