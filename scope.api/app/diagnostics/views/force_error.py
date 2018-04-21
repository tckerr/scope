from rest_framework.views import APIView


class ForceErrorApiView(APIView):

    def post(self, request, format=None):
        raise Exception("Don't panic! This exception was thrown by the 'Force error' API.")