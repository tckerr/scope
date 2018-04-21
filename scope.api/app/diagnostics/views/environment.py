import os

from rest_framework.response import Response
from rest_framework.views import APIView


class EnvironmentVariableApiView(APIView):
    authentication_classes = ()
    permission_classes = ()

    def get(self, request, format=None, env_var=''):
        env_var = os.environ.get(env_var, 'Environment variable \"{}\" not defined'.format(env_var))
        return Response(env_var)