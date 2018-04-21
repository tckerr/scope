import os

from django.http import HttpResponse

from helloworld.models import Person
from helloworld.models import Person2


def index(request):
    env_var = os.environ.get('SCOPE_DB_HOST', 'Sorry, I don\'t exist')
    model_count = Person.objects.count()
    model_count2 = Person2.objects.count()
    return HttpResponse("Hello, world. This is build 13. Here is my env var: " + env_var + ". Total model count: " + str(model_count))