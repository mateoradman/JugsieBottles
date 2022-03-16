import os

from django.contrib.auth import get_user_model
from django.core.management import BaseCommand


class Command(BaseCommand):
    help = 'Prepopulates the database with a superuser.'

    def handle(self, *args, **options):
        username: str = os.getenv('SUPERUSER_USERNAME', 'admin')
        password: str = os.getenv('SUPERUSER_PASSWORD', 'admin')
        user_model = get_user_model()
        if not user_model.objects.filter(username=username).exists():
            user_model.objects.create_superuser(username=username,
                                                email='info@jugsie.com',
                                                password=password)
        self.stdout.write(self.style.SUCCESS(
            f"Successfully added user '{username}' to the database."))
