from django.db import models

from project.models import Actor


class Organization(models.Model):
    name = models.CharField(max_length=128)
    actors = models.ManyToManyField(Actor, through='Membership', related_name='organizations')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)