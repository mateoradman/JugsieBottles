from rest_framework import generics
from .models import Bottle, Collection
from .serializers import BottleSerializer, CollectionSerializer


class BottleList(generics.ListAPIView):
    queryset = Bottle.objects.all()
    serializer_class = BottleSerializer


class BottleDetail(generics.RetrieveAPIView):
    queryset = Bottle.objects.all()
    serializer_class = BottleSerializer


class CollectionList(generics.ListAPIView):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer


class CollectionDetail(generics.RetrieveAPIView):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer
