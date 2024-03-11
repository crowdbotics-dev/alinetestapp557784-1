from rest_framework import authentication
from subscriptions.models import (
    UserSubscription,
    SubscriptionPlan,
    SubscriptionPlan,
    UserSubscription,
    SubscriptionPlan,
    UserSubscription,
)
from .serializers import (
    UserSubscriptionSerializer,
    SubscriptionPlanSerializer,
    SubscriptionPlanSerializer,
    UserSubscriptionSerializer,
    SubscriptionPlanSerializer,
    UserSubscriptionSerializer,
)
from rest_framework import viewsets


class UserSubscriptionViewSet(viewsets.ModelViewSet):
    serializer_class = UserSubscriptionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = UserSubscription.objects.all()


class SubscriptionPlanViewSet(viewsets.ModelViewSet):
    serializer_class = SubscriptionPlanSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = SubscriptionPlan.objects.all()
