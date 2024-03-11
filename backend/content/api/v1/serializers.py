from rest_framework import serializers
from content.models import Video, Video


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = "__all__"
