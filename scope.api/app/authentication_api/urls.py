from django.conf.urls import url
from rest_framework.authtoken import views

from authentication_api.views.register import RegisterApiView

urlpatterns = [
    url(r'^auth/token/', views.obtain_auth_token, name='auth-token'),
    url(r'^auth/register/', RegisterApiView.as_view(), name='auth-register'),
]
