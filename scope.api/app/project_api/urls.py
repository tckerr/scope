from django.conf.urls import url

from project_api.views.organizations import ReadOrganizationView, ListOrganizationsView

urlpatterns = [
    url(r'^organizations/(?P<organization_id>[0-9]+)$', ReadOrganizationView.as_view(), name='organizations-read'),
    url('organizations/', ListOrganizationsView.as_view(), name='organizations-list'),
]
