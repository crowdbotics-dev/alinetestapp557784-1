from django.conf import settings
from django.db import models


class UserSubscription(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "authentication.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="usersubscription_user",
    )
    subscription_plan = models.ForeignKey(
        "subscriptions.SubscriptionPlan",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="usersubscription_subscription_plan",
    )
    start_date = models.DateTimeField(
        null=False,
        blank=False,
    )
    end_date = models.DateTimeField(
        null=False,
        blank=False,
    )


class SubscriptionPlan(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    price = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=False,
        blank=False,
    )
    duration = models.IntegerField(
        null=False,
        blank=False,
    )


# Create your models here.
