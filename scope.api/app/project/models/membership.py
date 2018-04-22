from django.db import models

from project.models import Actor, Organization


class Membership(models.Model):
    actor = models.ForeignKey(Actor, on_delete=models.CASCADE)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    joined = models.DateTimeField(auto_now=True)
