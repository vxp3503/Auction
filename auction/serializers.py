from rest_framework import serializers
from .models import User

class UserSerializer(serializers.Serializer):
    watchlist=serializers.ManyRelatedField()