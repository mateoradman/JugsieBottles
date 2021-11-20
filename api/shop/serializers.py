from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from product.models import Bottle
from product.serializers import BottleSerializerOrder
from .models import OrderItem, Order, Address, Payment, Customer, Coupon, Refund


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        exclude = ['customer']


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        exclude = ['customer']


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        exclude = ['created']


class CouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coupon
        fields = '__all__'


class RefundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Refund
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    bottle = BottleSerializerOrder()

    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer()
    payment = PaymentSerializer()
    coupon = CouponSerializer(required=False)
    shipping_address = AddressSerializer()
    billing_address = AddressSerializer()
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        print(validated_data)
        print(type(validated_data))
        payment_data = validated_data.pop('payment')
        coupon = validated_data.pop('coupon', None)
        shipping_address_data = validated_data.pop('shipping_address')
        billing_address_data = validated_data.pop('billing_address')
        order_items_data = validated_data.pop('items')
        order_items = []
        for item in order_items_data:
            bottle_data = item.pop('bottle', {})
            if bottle_data:
                bottle = Bottle.objects.get(**bottle_data)
            else:
                raise ValidationError('Bottle not specified.')
            new_order_item = OrderItem.objects.create(bottle=bottle, **item)
            order_items.append(new_order_item)
        customer = self.create_customer(validated_data)
        shipping_address, _ = Address.objects.get_or_create(customer=customer,
                                                            **shipping_address_data)
        billing_address, _ = Address.objects.get_or_create(customer=customer,
                                                           **billing_address_data)
        payment = Payment.objects.create(customer=customer, **payment_data)
        if coupon:
            coupon = Coupon.objects.create(**coupon)
        order = Order.objects.create(customer=customer, payment=payment,
                                     coupon=coupon,
                                     shipping_address=shipping_address,
                                     billing_address=billing_address,
                                     **validated_data)
        order.items.set(order_items)
        return order

    def create_customer(self, validated_data):
        customer_data = validated_data.pop('customer')
        customer_email = customer_data.get('email')
        customer_filter = Customer.objects.filter(email=customer_email)
        if not customer_filter.exists():
            return Customer.objects.create(**customer_data)
        else:
            return customer_filter[0]
