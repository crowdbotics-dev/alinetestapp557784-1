from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    UserViewSet,
    UserProfileViewSet,
    UserViewSet,
    UserProfileViewSet,
    UserViewSet,
    UserProfileViewSet,
    UserViewSet,
    UserProfileViewSet,
)

router = DefaultRouter()
router.register("user", UserViewSet)
router.register("userprofile", UserProfileViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
