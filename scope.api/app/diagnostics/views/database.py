from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db import connections
from django.db.utils import OperationalError


class DatabaseApiView(APIView):
    authentication_classes = ()
    permission_classes = ()

    def get(self, request, format=None):
        db_conn = connections['default']
        try:
            c = db_conn.cursor()
        except OperationalError:
            return Response("Error connecting to DB", status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response("Database is up and running", status=status.HTTP_200_OK)
