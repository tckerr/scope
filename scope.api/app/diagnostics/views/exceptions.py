from rest_framework.views import APIView


class ExceptionsApiView(APIView):

    def post(self, request, format=None):
        """Force an exception."""
        raise Exception("Don't panic! This exception was thrown by a call to the 'exceptions' API.")