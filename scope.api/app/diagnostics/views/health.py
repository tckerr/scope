from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class HealthCheckApiView(APIView):
    authentication_classes = ()
    permission_classes = ()

    def get(self, request, format=None):
        return Response(status=status.HTTP_200_OK)
