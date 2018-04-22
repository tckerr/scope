from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import serializers, viewsets, permissions

from project.models import Actor, Organization


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ('id', 'name', 'organizations')

    organizations = serializers.SerializerMethodField()

    def get_organizations(self, obj):
        user = self.context['request'].user
        orgs = Organization.objects.filter(
            membership__actor=obj,
            membership__organization__actors__user_id=user.id).values('id')
        return [o['id'] for o in orgs]


class ActorsViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ActorSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('name', 'organizations')

    def get_queryset(self):
        return Actor \
            .objects \
            .filter(membership__organization__actors__user_id=self.request.user.id)\
            .distinct()