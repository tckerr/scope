from rest_framework.routers import DefaultRouter

from project_api.views.organizations import OrganizationsViewSet

router = DefaultRouter()
router.register(r'organizations', OrganizationsViewSet, base_name='organizations')
urlpatterns = router.urls
