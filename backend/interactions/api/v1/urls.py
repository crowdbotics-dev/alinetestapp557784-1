from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    SwipeViewSet,
    MatchViewSet,
    MatchViewSet,
    SwipeViewSet,
    MatchViewSet,
    SwipeViewSet,
    MatchViewSet,
    SwipeViewSet,
)

router = DefaultRouter()
router.register("swipe", SwipeViewSet)
router.register("match", MatchViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
