from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('diagnostics_api.urls')),
    url(r'^api/', include('authentication_api.urls')),
    url(r'^api/', include('project_api.urls')),
    url(r'^docs/', include_docs_urls(title='Scope API'))
]
