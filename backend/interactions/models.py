from django.conf import settings
from django.db import models


class Swipe(models.Model):
    "Generated Model"
    swiper = models.ForeignKey(
        "authentication.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="swiped_by",
    )
    swiped = models.ForeignKey(
        "authentication.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="swiped_on",
    )
    direction = models.CharField(
        max_length=10,
        null=False,
        blank=False,
    )


class Match(models.Model):
    "Generated Model"
    user_one = models.ForeignKey(
        "authentication.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="matches_user_one",
    )
    user_two = models.ForeignKey(
        "authentication.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="matches_user_two",
    )
    match_time = models.DateTimeField(
        null=False,
        blank=True,
    )


# Create your models here.
