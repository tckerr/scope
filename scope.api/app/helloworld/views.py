import os

from django.http import HttpResponse

def index(request):
    env_var = os.environ.get('SCOPE_DB_HOST', 'Sorry, I don\'t exist')
    return HttpResponse("Hello, world. This is build 12. Here is my env var: " + env_var)