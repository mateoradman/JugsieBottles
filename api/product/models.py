from django.db import models


class Bottle(models.Model):
    name = models.CharField(blank=False, null=False, max_length=64)
    colour = models.CharField(blank=False, null=False, max_length=64)
    description = models.TextField()
    highlights = models.TextField()
    details = models.TextField()
    price = models.IntegerField(blank=False, null=False)
    stock = models.IntegerField(default=0, blank=True, null=True)

    def __str__(self):
        return f"{self.name} {self.colour}"

    class Meta:
        ordering = ['colour']
