from django.conf.urls import url

from diagnostics.views.database import DatabaseApiView
from diagnostics.views.environment import EnvironmentVariableApiView
from diagnostics.views.health import HealthCheckApiView

urlpatterns = [
    url(r'^environment/(?P<env_var>[A-Za-z0-9_]+)$', EnvironmentVariableApiView.as_view(), name='environment-variable'),
    url('health_check', HealthCheckApiView.as_view(), name='health_check'),
    url('database', DatabaseApiView.as_view(), name='database'),
]