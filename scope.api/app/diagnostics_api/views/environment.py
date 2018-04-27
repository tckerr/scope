import os

from rest_framework import authentication, permissions
from rest_framework.response import Response
from rest_framework.views import APIView


class EnvironmentVariableApiView(APIView):
    authentication_classes = (authentication.TokenAuthentication, authentication.BasicAuthentication)
    permission_classes = (permissions.IsAdminUser,)

    def get(self, request, format=None, environmentVariable=''):
        """Return an environment variable. Admins only."""
        env_var = os.environ.get(environmentVariable, 'Environment variable \"{}\" not defined'.format(environmentVariable))
        return Response(env_var)