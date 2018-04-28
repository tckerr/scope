from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin, ListModelMixin
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer


class CreateUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'password')
        extra_kwargs = {
            'password': {'write_only': True}
        }


class UserUsernameSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)
        read_only_fields = ('username',)


class UserAuthApiView(CreateModelMixin, ListModelMixin, GenericAPIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()
    serializer_class = CreateUserSerializer

    def post(self, request):
        serializer = CreateUserSerializer(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            # TODO: implement in serializer
            User.objects.create_user(
                username=validated_data['username'],
                email=validated_data['email'],
                password=validated_data['password'])
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        username = request.query_params.get('username', None)
        users = User.objects.filter(username__exact=username)
        data = [{'username': u.username} for u in users]
        return Response(data, status=status.HTTP_200_OK)
