from typing import List

from django.core.management import BaseCommand
from faq.models import FAQSection, QuestionAndAnswer

from .data import GENERAL, ORDERS, RETURNS


class Command(BaseCommand):
    help = 'Prepopulates the database with FAQs.'

    def handle(self, *args, **options):
        sections = [FAQSection(name="General", icon="InformationCircleIcon"),
                    FAQSection(name="Orders and Delivery", icon="TruckIcon"),
                    FAQSection(name="Returns", icon="ReceiptRefundIcon")]
        data_lists = [GENERAL, ORDERS, RETURNS]
        for data, section in zip(data_lists, sections):
            self.save_questions_and_answers(data, section)
        self.stdout.write(self.style.SUCCESS(
            "Successfully added FAQs to the database."))

    def save_questions_and_answers(self, data: List[List[str]], section: FAQSection) -> None:
        section.save()
        objs = []
        for item in data:
            new_obj = QuestionAndAnswer(question=item[0],
                                        answer=item[1],
                                        section=section)
            objs.append(new_obj)
        QuestionAndAnswer.objects.bulk_create(objs)
