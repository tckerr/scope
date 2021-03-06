# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2018-04-22 11:51
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0005_actor_user_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('created', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='JobStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='Workstream',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('created', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.RenameField(
            model_name='membership',
            old_name='datetime_joined',
            new_name='joined',
        ),
        migrations.RenameField(
            model_name='project',
            old_name='datetime_created',
            new_name='created',
        ),
        migrations.AddField(
            model_name='actor',
            name='created',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='organization',
            name='created',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='workstream',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='workstreams', to='project.Project'),
        ),
        migrations.AddField(
            model_name='jobstatus',
            name='workstream',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='statuses', to='project.Workstream'),
        ),
        migrations.AddField(
            model_name='job',
            name='status',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='jobs', to='project.JobStatus'),
        ),
        migrations.AddField(
            model_name='job',
            name='workstream',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='jobs', to='project.Workstream'),
        ),
    ]
