from rest_framework import serializers
from interactions.models import Swipe, Match, Match, Swipe


class SwipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Swipe
        fields = "__all__"


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = "__all__"
