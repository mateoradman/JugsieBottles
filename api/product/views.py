from rest_framework import generics

from .models import Bottle
from .serializers import BottleSerializer


class BottleList(generics.ListAPIView):
    queryset = Bottle.objects.all()
    serializer_class = BottleSerializer


class BottleDetail(generics.RetrieveAPIView):
    queryset = Bottle.objects.all()
    serializer_class = BottleSerializer
