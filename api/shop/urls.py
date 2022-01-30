from django.urls import path

from shop import views

urlpatterns = [
    path('customers/', views.CustomerListCreateView.as_view()),
    path('customers/<str:email>', views.CustomerDetail.as_view()),
    path('order-items/', views.OrderItemListCreateView.as_view()),
    path('order-items/<int:pk>', views.OrderItemDetail.as_view()),
    path('addresses/', views.AddressListCreateView.as_view()),
    path('addresses/<int:pk>', views.AddressDetail.as_view()),
    path('coupons/', views.CouponListCreateView.as_view()),
    path('coupons/<int:pk>', views.CouponDetail.as_view()),
    path('refunds/', views.RefundListCreateView.as_view()),
    path('refunds/<int:pk>', views.RefundDetail.as_view()),
    path('orders/', views.OrderListCreateView.as_view()),
    path('orders/<int:pk>', views.OrderDetail.as_view()),
]
