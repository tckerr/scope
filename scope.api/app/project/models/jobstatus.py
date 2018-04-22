from django.db import models

from project.models import Organization


class JobStatus(models.Model):
    name = models.CharField(max_length=128)
    organization = models.ForeignKey(Organization, related_name='statuses', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now=True)