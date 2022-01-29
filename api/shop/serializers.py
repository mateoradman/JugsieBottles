from rest_framework import serializers

from .models import Address, Coupon, Customer, Order, OrderItem, Refund


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

    # Do not create customer if a customer exists
    def create(self, validated_data):
        instance, _ = self.Meta.model.objects.get_or_create(**validated_data)
        return instance


class CouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coupon
        fields = '__all__'


class RefundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Refund
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

    def create(self, validated_data):
        instance, _ = self.Meta.model.objects.get_or_create(**validated_data)
        return instance


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        order_items = validated_data.pop('items', [])
        instance = Order.objects.create(**validated_data)
        for item in order_items:
            order_item = OrderItem.objects.filter(**item).first()
            instance.items.add(order_item)
        return instance
