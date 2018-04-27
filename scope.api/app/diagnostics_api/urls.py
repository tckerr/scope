from django.conf.urls import url

from diagnostics_api.views.app_diagnostics import AppDiagnosticsApiView
from diagnostics_api.views.environment import EnvironmentVariableApiView
from diagnostics_api.views.exceptions import ExceptionsApiView

urlpatterns = [
    url(r'^diagnostics/environmentVariables/(?P<environmentVariable>[A-Za-z0-9_]+)/$', EnvironmentVariableApiView.as_view(), name='environmentVariables'),
    url('diagnostics/exceptions/', ExceptionsApiView.as_view(), name='exception'),
    url('diagnostics', AppDiagnosticsApiView.as_view(), name='appDiagnostics'),
]
