from django.contrib import admin

from .models import OrderItem, Order, Address, Customer, Coupon, Refund

admin.site.register(Customer)
admin.site.register(Address)
admin.site.register(Refund)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(Coupon)
