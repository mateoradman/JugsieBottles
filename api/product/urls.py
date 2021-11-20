from django.urls import path

from .views import BottleDetail, BottleList

urlpatterns = [
    path('bottles/<int:pk>', BottleDetail.as_view(), name='bottle'),
    path('bottles/', BottleList.as_view(), name='all_bottles'),
]
