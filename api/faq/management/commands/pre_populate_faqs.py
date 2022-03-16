from typing import List

from django.core.management import BaseCommand
from faq.models import FAQSection, QuestionAndAnswer

from .data import GENERAL, ORDERS, RETURNS


class Command(BaseCommand):
    help = 'Prepopulates the database with FAQs.'

    def handle(self, *args, **options) -> None:
        sections = [("General", "InformationCircleIcon", GENERAL),
                    ("Orders and Delivery", "TruckIcon", ORDERS),
                    ("Returns", "ReceiptRefundIcon", RETURNS)]
        for name, icon, questions in sections:
            section = FAQSection.objects.get_or_create(name=name, icon=icon)
            self.save_questions_and_answers(questions, section)
        self.stdout.write(self.style.SUCCESS(
            "Successfully added FAQs to the database."))

    def save_questions_and_answers(self, data: List[List[str]], section: FAQSection) -> None:
        for item in data:
            QuestionAndAnswer.objects.get_or_create(question=item[0],
                                                    answer=item[1],
                                                    section=section)
