from django.test import TestCase

from project.models import Organization, JobStatus


class JobStatusTestCase(TestCase):
    def setUp(self):
        self.org = Organization()
        self.org.save()
        self.status = JobStatus(organization=self.org)
        self.status.save()

    def tearDown(self):
        self.org.delete()

    def test__status_organization__matches(self):
        self.assertEqual(self.status.organization, self.org)