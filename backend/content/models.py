from django.conf import settings
from django.db import models


class Video(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "authentication.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="video_user",
    )
    video_file = models.FileField(
        null=False,
        blank=False,
    )
    approved = models.BooleanField(
        null=False,
        blank=True,
    )
    upload_date = models.DateTimeField(
        null=False,
        blank=True,
    )


# Create your models here.
