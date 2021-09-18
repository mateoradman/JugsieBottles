from rest_framework import serializers
from .models import Bottle, Collection


class BottleSerializer(serializers.Serializer):
    class Meta:
        model = Bottle
        fields = '__all__'


class CollectionSerializer(serializers.Serializer):
    class Meta:
        model = Collection
        fields = '__all__'
