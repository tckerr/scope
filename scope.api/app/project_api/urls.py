from rest_framework.routers import DefaultRouter

from project_api.views.actors import ActorsViewSet
from project_api.views.organizations import OrganizationsViewSet
from project_api.views.projects import ProjectsViewSet

router = DefaultRouter()
router.register(r'organizations', OrganizationsViewSet, base_name='organizations')
router.register(r'actors', ActorsViewSet, base_name='actors')
router.register(r'projects', ProjectsViewSet, base_name='projects')
urlpatterns = router.urls