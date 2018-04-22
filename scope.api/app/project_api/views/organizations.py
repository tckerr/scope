from rest_framework import serializers, authentication, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from project.models import Organization


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ('id', 'name',)


class ListOrganizationsView(APIView):
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.BasicAuthentication,
        authentication.SessionAuthentication)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        """Retrieve a list of all organizations."""
        organizations = Organization \
            .objects \
            .filter(actors__user_id=request.user.id) \
            .order_by('id') \
            .all()
        serializer = OrganizationSerializer(organizations, many=True)
        return Response(serializer.data)


class ReadOrganizationView(APIView):
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.BasicAuthentication,
        authentication.SessionAuthentication)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, organization_id, format=None):
        """Retrieve an organization."""
        if organization_id is None:
            raise Exception()
        organizations = Organization \
            .objects \
            .filter(actors__user_id=request.user.id, id=organization_id) \
            .order_by('id')
        if organizations:
            serializer = OrganizationSerializer(organizations.first(), many=False)
            return Response(serializer.data)
        return Response(status=status.HTTP_404_NOT_FOUND)
