from django.contrib.auth.models import User
from django.db.models import QuerySet
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase


class UserAuthTestCase(APITestCase):
    url = reverse('auth-users')

    def setUp(self):
        self.user = User.objects.create_user(username="RegisterTestCase_user0", email="user@email.com", password="1")

    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()

    def tearDown(self):
        User.objects.filter(username__istartswith='RegisterTestCase').delete()

    def test__register_returns_400__when_username_exists(self):
        response = self.client.post(self.url,
                                    {'username': 'RegisterTestCase_user0', 'password': '1', 'email': 'test@test.com'})
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEquals(response.data['username'][0], 'A user with that username already exists.')

    def test__register_returns_400__when_email_is_invalid(self):
        response = self.client.post(self.url, {'username': 'RegisterTestCase_user1', 'password': '1', 'email': '1'})
        self.assertEquals(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEquals(response.data['email'][0], 'Enter a valid email address.')

    def test__register__creates_user_and_returns_201(self):
        response = self.client.post(self.url,
                                    {'username': 'RegisterTestCase_user1', 'password': '1', 'email': 'a@a.com'})
        self.assertEquals(response.status_code, status.HTTP_201_CREATED)
        self.assertEquals(response.data, {
            'username': 'RegisterTestCase_user1',
            'email':    'a@a.com'
        })
        self.assertEquals(User.objects.filter(username='RegisterTestCase_user1').count(), 1)

    def test__register__sets_email(self):
        self.client.post(self.url, {'username': 'RegisterTestCase_user1', 'password': '1', 'email': 'a@a.com'})
        self.assertEquals(User.objects.get(email='a@a.com').username, 'RegisterTestCase_user1')

    def test__register__hashes_password(self):
        self.client.post(self.url, {'username': 'RegisterTestCase_user1', 'password': '1', 'email': 'a@a.com'})
        user = User.objects.get(username='RegisterTestCase_user1')
        self.assertTrue(user.check_password('1'))

    def test__list__returns_empty_when_no_search_term_present(self):
        response = self.client.get(self.url)
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(list(response.data), [])

    def test__list__returns_users_with_username__when_passed_username(self):
        response = self.client.get(self.url, {'username': self.user.username})
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, [{'username': self.user.username}])

    def test__list__returns_empty__when_passed_username_that_doesnt_exist(self):
        response = self.client.get(self.url, {'username2': self.user.username})
        self.assertEquals(response.status_code, status.HTTP_200_OK)
        self.assertEquals(response.data, [])
