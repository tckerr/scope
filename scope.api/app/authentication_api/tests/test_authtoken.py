from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase


class AuthTokenTestCase(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(username="user", email="user@email.com", password="1")

    def tearDown(self):
        self.user.delete()

    def test__auth_token_returns_token__when_username_and_password_match(self):
        url = reverse('auth-token')
        response = self.client.post(url, {'username': 'user', 'password': '1'})
        expected_token = Token.objects.get(user=self.user).key
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data['token'], expected_token)

    def test__auth_token_returns_400__when_username_doesnt_exist(self):
        url = reverse('auth-token')
        response = self.client.post(url, {'username': 'bad_username', 'password': '1'})
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test__auth_token_returns_400__when_password_doesnt_match(self):
        url = reverse('auth-token')
        response = self.client.post(url, {'username': 'user', 'password': '2'})
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)
