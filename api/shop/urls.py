from django.urls import path

from shop.views import CustomerDetail, CustomerListCreateView, \
    OrderListCreateView

urlpatterns = [
    path('customers/<str:email>', CustomerDetail.as_view(), name='order_item_detail'),
    path('customers/', CustomerListCreateView.as_view(), name='order_item'),
    path('orders/', OrderListCreateView.as_view(), name='orders'),
]
