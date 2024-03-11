from rest_framework import authentication
from interactions.models import Swipe, Match, Match, Swipe, Match, Swipe
from .serializers import (
    SwipeSerializer,
    MatchSerializer,
    MatchSerializer,
    SwipeSerializer,
    MatchSerializer,
    SwipeSerializer,
)
from rest_framework import viewsets


class SwipeViewSet(viewsets.ModelViewSet):
    serializer_class = SwipeSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Swipe.objects.all()


class MatchViewSet(viewsets.ModelViewSet):
    serializer_class = MatchSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Match.objects.all()
