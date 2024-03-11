from django.conf import settings
from django.db import models


class User(models.Model):
    "Generated Model"
    email = models.EmailField(
        null=False,
        blank=False,
    )
    password = models.CharField(
        max_length=255,
        null=False,
        blank=False,
    )
    is_admin = models.BooleanField(
        null=False,
        blank=True,
    )
    date_joined = models.DateTimeField(
        null=False,
        blank=True,
    )


class UserProfile(models.Model):
    "Generated Model"
    user = models.OneToOneField(
        "authentication.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="userprofile_user",
    )
    sex = models.CharField(
        max_length=50,
        null=True,
        blank=True,
    )
    religion = models.CharField(
        max_length=50,
        null=True,
        blank=True,
    )
    nationality = models.CharField(
        max_length=50,
        null=True,
        blank=True,
    )
    build = models.CharField(
        max_length=50,
        null=True,
        blank=True,
    )
    distance = models.IntegerField(
        null=True,
        blank=True,
    )
    education = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    political_conviction = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    kids = models.BooleanField(
        null=True,
        blank=True,
    )
    age = models.IntegerField(
        null=True,
        blank=True,
    )


# Create your models here.
