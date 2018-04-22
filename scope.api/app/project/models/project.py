from django.db import models

from project.models import Organization


class Project(models.Model):
    name = models.CharField(max_length=128)
    organization = models.ForeignKey(Organization, related_name='projects', on_delete=models.CASCADE)
    datetime_created = models.DateTimeField(auto_now=True)