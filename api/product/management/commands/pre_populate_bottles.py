from django.core.management import BaseCommand

from product.models import Bottle


class Command(BaseCommand):
    help = 'Prepopulates the database with Jugsie bottles'

    def handle(self, *args, **options):
        name = "Jugsie Bottle"
        description = "some_text"
        details = "some_text"
        price = 130
        bottles = ["Green", "Blue", "Black", "Hot Pink", "White", "Turquoise",
                   "Lilac"]
        for colour in bottles:
            Bottle.objects.get_or_create(name=name,
                                         price=100 if colour == "Hot Pink" else price,
                                         colour=colour,
                                         description=description,
                                         details=details)

        self.stdout.write(self.style.SUCCESS(
            "Successfully added Jugsie Bottles to the Database."))
