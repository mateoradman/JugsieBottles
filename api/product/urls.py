from django.urls import path

from .views import BottleDetail, BottleList, CollectionDetail, CollectionList

urlpatterns = [
    path('bottle/<int:pk>', BottleDetail.as_view(), name='bottle'),
    path('bottles', BottleList.as_view(), name='all_bottles'),
    path('collection/<int:pk>', CollectionDetail.as_view(), name='collection'),
    path('collections', CollectionList.as_view(), name='all_collections'),
    ]
