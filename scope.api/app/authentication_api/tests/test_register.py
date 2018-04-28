from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase


class RegisterTestCase(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(username="RegisterTestCase_user0", email="user@email.com", password="1")

    def tearDown(self):
        User.objects.filter(username__istartswith='RegisterTestCase').delete()

    def test__register_returns_400__when_username_exists(self):
        url = reverse('auth-register')
        response = self.client.post(url, {'username': 'RegisterTestCase_user0', 'password': '1', 'email': 'test@test.com'})
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEquals(response.data['username'][0], 'A user with that username already exists.')

    def test__register_returns_400__when_email_is_invalid(self):
        url = reverse('auth-register')
        response = self.client.post(url, {'username': 'RegisterTestCase_user1', 'password': '1', 'email': '1'})
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEquals(response.data['email'][0], 'Enter a valid email address.')

    def test__register__creates_user_and_returns_201(self):
        url = reverse('auth-register')
        response = self.client.post(url, {'username': 'RegisterTestCase_user1', 'password': '1', 'email': 'a@a.com'})
        self.assertEquals(response.status_code, status.HTTP_201_CREATED)
        self.assertEquals(response.data, {
            'username': 'RegisterTestCase_user1',
            'email': 'a@a.com'
        })
        self.assertEquals(User.objects.filter(username='RegisterTestCase_user1').count(), 1)
