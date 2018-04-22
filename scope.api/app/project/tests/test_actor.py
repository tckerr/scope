from django.test import TestCase

from project.models import Actor


class ActorTestCase(TestCase):
    def setUp(self):
        pass

    def test_actor_class_exists(self):
        actor = Actor()
        self.assertTrue(True)