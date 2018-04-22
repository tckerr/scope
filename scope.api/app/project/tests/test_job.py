from django.core.exceptions import PermissionDenied
from django.test import TestCase

from project.models import Project, Organization, Workstream, Job, JobStatus


class JobTestCase(TestCase):
    def setUp(self):
        self.org = Organization()
        self.org.save()
        self.org2 = Organization()
        self.org2.save()
        self.project = Project(organization=self.org)
        self.project.save()
        self.workstream = Workstream(project=self.project)
        self.workstream.save()
        self.status1 = JobStatus(organization=self.org)
        self.status1.save()
        self.status2 = JobStatus(organization=self.org2)
        self.status2.save()
        self.job = Job(workstream=self.workstream, status=self.status1)
        self.job.save()

    def tearDown(self):
        self.org.delete()
        self.org2.delete()

    def test__job_workstream__matches(self):
        self.assertEqual(self.workstream, self.job.workstream)

    def test__save__throws_when_org_doesnt_match_workstream(self):
        job = Job(workstream=self.workstream, status=self.status2)
        self.assertRaises(PermissionDenied, lambda: job.save())
