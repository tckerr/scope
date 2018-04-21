from django.conf.urls import url

from diagnostics.views.app_diagnostics import AppDiagnosticsApiView
from diagnostics.views.environment import EnvironmentVariableApiView
from diagnostics.views.exceptions import ExceptionsApiView

urlpatterns = [
    url(r'^environmentVariables/(?P<environmentVariable>[A-Za-z0-9_]+)/$', EnvironmentVariableApiView.as_view(), name='environmentVariables'),
    url('exceptions/', ExceptionsApiView.as_view(), name='exception'),
    url('', AppDiagnosticsApiView.as_view(), name='appDiagnostics'),
]
