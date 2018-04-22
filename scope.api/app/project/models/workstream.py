from django.db import models

from project.models import Project


class Workstream(models.Model):
    name = models.CharField(max_length=128)
    project = models.ForeignKey(Project, related_name='workstreams', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now=True)