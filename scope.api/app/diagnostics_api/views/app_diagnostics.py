from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
import settings
from diagnostics.database import database_is_up


class AppDiagnosticsApiView(APIView):
    authentication_classes = ()
    permission_classes = ()

    def get(self, request, format=None):
        """Check the app server status. Used by the load balancer to detect instance availability"""
        return Response({
            'databaseOnline': database_is_up(),
            'applicationVersion': settings.APP_VERSION_NUMBER
        }, status=status.HTTP_200_OK)
