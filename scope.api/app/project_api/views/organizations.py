from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import serializers, viewsets
from rest_framework.permissions import IsAuthenticated

from project.models import Organization, Actor, Membership


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ('id', 'name',)


    def create(self, validated_data):
        org = super().create(validated_data)
        user = self.context['request'].user
        actor = Actor.objects.get(user_id=user.id)
        Membership(actor=actor, organization=org).save()
        return org


class OrganizationsViewSet(viewsets.ModelViewSet):
    serializer_class = OrganizationSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('name',)

    def get_queryset(self):
        return Organization \
            .objects \
            .filter(actors__user_id=self.request.user.id) \
            .order_by('id')
