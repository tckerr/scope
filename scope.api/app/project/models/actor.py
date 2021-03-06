from django.db import models


class Actor(models.Model):
    name = models.CharField(max_length=128)
    user_id = models.IntegerField(null=True) # not a foreign key since we don't want any dependencies on user
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)