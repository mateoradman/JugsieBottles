from product.models import Bottle
from rest_framework import generics, status
from rest_framework.response import Response

from .models import Address, Coupon, Customer, Order, OrderItem, Refund
from .serializers import (AddressSerializer, CouponSerializer,
                          CustomerSerializer, OrderItemSerializer,
                          OrderSerializer, RefundSerializer)


class CustomerListCreateView(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    lookup_field = 'email'


class OrderItemListCreateView(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

    def post(self, request, format=None):
        cart_data = request.data
        data = []
        if isinstance(cart_data, list):
            for obj in cart_data:
                bottle = Bottle.objects.filter(colour=obj.get('name')).first()
                if bottle:
                    obj_data = dict(bottle=bottle.pk,
                                    personalization_text=obj.get('text'),
                                    personalization_icon=obj.get('icon'),
                                    quantity=1)
                    data.append(obj_data)
            serializer = self.get_serializer(data=data, many=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class OrderItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class AddressListCreateView(generics.ListCreateAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class AddressDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class CouponListCreateView(generics.ListCreateAPIView):
    queryset = Coupon.objects.all()
    serializer_class = CouponSerializer


class CouponDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coupon.objects.all()
    serializer_class = CouponSerializer


class RefundListCreateView(generics.ListCreateAPIView):
    queryset = Refund.objects.all()
    serializer_class = RefundSerializer


class RefundDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Refund.objects.all()
    serializer_class = RefundSerializer


class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderDetail(generics.RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
