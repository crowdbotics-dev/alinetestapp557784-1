from rest_framework import serializers
from subscriptions.models import (
    UserSubscription,
    SubscriptionPlan,
    SubscriptionPlan,
    UserSubscription,
)


class UserSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSubscription
        fields = "__all__"


class SubscriptionPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscriptionPlan
        fields = "__all__"
