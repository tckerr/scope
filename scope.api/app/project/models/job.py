from django.core.exceptions import PermissionDenied
from django.db import models

from project.models import Workstream, JobStatus


class Job(models.Model):
    name = models.CharField(max_length=128)
    workstream = models.ForeignKey(Workstream, related_name='jobs', on_delete=models.CASCADE)
    status = models.ForeignKey(JobStatus, related_name='jobs', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        if self.status.organization is not self.workstream.project.organization:
            raise PermissionDenied("Attempted to save a job with a status from a different organization.")
        super().save(force_insert, force_update, using, update_fields)
