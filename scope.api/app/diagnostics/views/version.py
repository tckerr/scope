from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
import settings


class VersionApiView(APIView):
    authentication_classes = ()
    permission_classes = ()

    def get(self, request, format=None):
        return Response(settings.APP_VERSION_NUMBER, status=status.HTTP_200_OK)