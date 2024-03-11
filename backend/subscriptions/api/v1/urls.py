from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    UserSubscriptionViewSet,
    SubscriptionPlanViewSet,
    SubscriptionPlanViewSet,
    UserSubscriptionViewSet,
    SubscriptionPlanViewSet,
    UserSubscriptionViewSet,
    SubscriptionPlanViewSet,
    UserSubscriptionViewSet,
)

router = DefaultRouter()
router.register("usersubscription", UserSubscriptionViewSet)
router.register("subscriptionplan", SubscriptionPlanViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
