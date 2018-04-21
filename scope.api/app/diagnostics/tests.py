from django.test import TestCase


class PassingTestCase(TestCase):
    def setUp(self):
        pass

    def test_will_always_pass(self):
        self.assertTrue(True)