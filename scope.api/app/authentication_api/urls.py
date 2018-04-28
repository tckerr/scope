from django.conf.urls import url
from rest_framework.authtoken import views

from authentication_api.views.user import UserAuthApiView

urlpatterns = [
    url(r'^auth/token/', views.obtain_auth_token, name='auth-token'),
    url(r'^auth/users/', UserAuthApiView.as_view(), name='auth-users'),
]
