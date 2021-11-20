from django.core.management import BaseCommand

from product.models import Bottle


class Command(BaseCommand):
    help = 'Prepopulates the database with Jugsie bottles'

    def handle(self, *args, **options):
        name = "Jugsie Bottle"
        description = "some_text"
        highlights = "some_text"
        details = "some_text"
        price = 130
        bottles = ["Green", "Blue", "Black", "Hot Pink", "White", "Turquoise",
                   "Lilac"]
        objs = []
        for colour in bottles:
            objs.append(
                Bottle(name=name,
                       price=price if colour != "Hot Pink" else 100,
                       colour=colour,
                       description=description, highlights=highlights,
                       details=details))
        Bottle.objects.bulk_create(objs)
        self.stdout.write(self.style.SUCCESS(
            "Successfully added Jugsie Bottles to the Database."))
