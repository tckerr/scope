from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/diagnostics/', include('diagnostics.urls')),
    url(r'^api/', include('authentication.urls')),
    url(r'^api/', include('project_api.urls')),
    url(r'^docs/', include_docs_urls(title='Scope API'))
]
