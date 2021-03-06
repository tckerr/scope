from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import serializers, viewsets, permissions, status
from rest_framework.response import Response

from project.models import Project, Organization


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'created', 'organization')
        read_only_fields = ('id', 'created',)


class ProjectUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'created', 'organization')
        read_only_fields = ('id', 'organization', 'created',)


class ProjectsViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('name', 'organization', 'created')

    def get_serializer_class(self):
        serializer_class = self.serializer_class
        if self.request and (self.request.method == 'PATCH' or self.request.method == 'PUT'):
            serializer_class = ProjectUpdateSerializer
        return serializer_class

    @staticmethod
    def org_is_editable(request):
        org_id = request.data.get('organization', None)
        org_editable = not org_id or Organization.objects.filter(pk=org_id, actors__user_id=request.user.id)
        return org_editable

    def create(self, request, *args, **kwargs):
        if not self.org_is_editable(request):
            return Response('Organization not found', status=status.HTTP_400_BAD_REQUEST)
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        if not self.org_is_editable(request):
            return Response('Organization not found', status=status.HTTP_400_BAD_REQUEST)
        return super().update(request, *args, **kwargs)

    def get_queryset(self):
        return Project \
            .objects \
            .filter(organization__actors__user_id=self.request.user.id) \
            .distinct()
