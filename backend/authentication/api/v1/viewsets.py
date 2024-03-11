from rest_framework import authentication
from authentication.models import (
    User,
    UserProfile,
    User,
    UserProfile,
    User,
    UserProfile,
)
from .serializers import (
    UserSerializer,
    UserProfileSerializer,
    UserSerializer,
    UserProfileSerializer,
    UserSerializer,
    UserProfileSerializer,
)
from rest_framework import viewsets


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = User.objects.all()


class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = UserProfile.objects.all()
