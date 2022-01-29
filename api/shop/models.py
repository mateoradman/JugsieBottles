import random
import string

from django.db import models
from django_countries.fields import CountryField
from product.models import Bottle

ADDRESS_CHOICES = (
    ('B', 'Billing'),
    ('S', 'Shipping'),
)

PERSONALIZATION_ICON_CHOICES = (
    ('aeroplane', 'Aeroplane'),
    ('butterfly', 'Butterfly'),
    ('camera', 'Camera'),
    ('clover', 'Clover'),
    ('crown', 'Crown'),
    ('dumbbell', 'Dumbbell'),
    ('flower', 'Flower'),
    ('heart', 'Heart'),
    ('lipstick', 'Lipstick'),
    ('musical-note', 'MusicalNote'),
    ('paw', 'Paw'),
    ('smile', 'Smile'),
    ('star', 'Star'),
    ('tooth', 'Tooth'),
)


def create_ref_code():
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=20))


class Customer(models.Model):
    first_name = models.CharField(max_length=254)
    last_name = models.CharField(max_length=254)
    email = models.EmailField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Customer name: {self.first_name} {self.last_name}\n Customer Email: {self.email}'


class OrderItem(models.Model):
    bottle = models.ForeignKey(Bottle, on_delete=models.CASCADE,
                               related_name='orderitem_bottle')
    personalization_text = models.CharField(max_length=8, default='',
                                            blank=True, null=True)
    personalization_icon = models.CharField(max_length=64, default='',
                                            blank=True, null=True,
                                            choices=PERSONALIZATION_ICON_CHOICES)
    quantity = models.IntegerField(default=1, blank=True, null=True)

    def __str__(self):
        return f"{self.bottle} Order Item"


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True,
                                 blank=True)
    items = models.ManyToManyField(OrderItem)
    total_price = models.IntegerField()
    currency = models.CharField(max_length=3, default='HRK')
    ref_code = models.CharField(max_length=20, default=create_ref_code,
                                blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    shipping_address = models.ForeignKey(
        'Address', related_name='shipping_address', on_delete=models.SET_NULL,
        blank=True, null=True)
    billing_address = models.ForeignKey(
        'Address', related_name='billing_address', on_delete=models.SET_NULL,
        blank=True, null=True)
    coupon = models.ForeignKey(
        'Coupon', on_delete=models.SET_NULL, blank=True, null=True)
    being_delivered = models.BooleanField(default=False)
    received = models.BooleanField(default=False)

    def __str__(self):
        return f"Order {self.ref_code}: {self.customer.first_name} {self.customer.last_name}"


class Address(models.Model):
    street_address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    country = CountryField(multiple=False)
    zip_code = models.CharField(max_length=255)
    address_type = models.CharField(max_length=1, choices=ADDRESS_CHOICES)

    def __str__(self):
        return f"{self.address_type}: {self.street_address} {self.zip_code} {self.city} {self.country}"

    class Meta:
        verbose_name_plural = 'Addresses'


class Coupon(models.Model):
    code = models.CharField(max_length=15, null=True, blank=True, default=None)
    amount = models.FloatField(null=True, blank=True, default=None)

    def __str__(self):
        return self.code


class Refund(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE,
                              related_name='order_refunds')
    reason = models.TextField()
    requested = models.BooleanField(default=False)
    granted = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.pk}"
