from rest_framework import serializers

from .models import Bottle


class BottleSerializerOrder(serializers.ModelSerializer):
    class Meta:
        model = Bottle
        fields = ['name', 'colour']


class BottleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bottle
        fields = '__all__'
