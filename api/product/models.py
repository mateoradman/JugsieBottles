from django.db import models


class Collection(models.Model):
    name = models.CharField(default='', max_length=64)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Bottle(models.Model):
    name = models.CharField(blank=False, null=False, max_length=64)
    description = models.CharField(max_length=250, blank=True, null=True)
    image = models.ImageField(upload_to="bottle/", blank=True, null=True)
    price = models.FloatField(default=0.00, blank=False, null=False)
    collection = models.ForeignKey(Collection, on_delete=models.SET_NULL,
                                   blank=True, null=True)
    stock = models.IntegerField(default=0, blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
