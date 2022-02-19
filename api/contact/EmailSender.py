from typing import Any, Dict, List, Tuple

from django.conf import settings
from django.core.mail import get_connection, mail_admins, send_mail
from django.template.loader import render_to_string

ORDER_CONFIRMATION_EN = 'We received your order'
ORDER_CONFIRMATION_HR = 'Primili smo Vašu narudžbu'
NEW_ORDER_NOTIFICATION = 'Nova narudžba'
NEW_CONTACT_NOTIFICATION = 'Nova poruka od korisnika'
CONTACT_CONFIRMATION_EN = 'Thank you for your message'
CONTACT_CONFIRMATION_HR = 'Zahvaljujemo se na upitu'


class EmailSender:
    def __init__(self, recipient: str, data: Dict[str, Any], locale: str = 'hr', contact_form: bool = False) -> None:
        self.request_data = data
        self.locale: str = locale
        self.recipient: List[str] = [recipient]  # Django accepts a list of recipients
        self.internal_subject, self.customer_subject = self.determine_email_subject(contact_form)

    def determine_email_subject(self, contact_form: bool) -> Tuple[str, str]:
        if contact_form:
            internal_subject: str = NEW_CONTACT_NOTIFICATION
            customer_subject: str = CONTACT_CONFIRMATION_HR if self.locale == 'hr' else CONTACT_CONFIRMATION_EN
        else:
            internal_subject: str = NEW_ORDER_NOTIFICATION
            customer_subject: str = ORDER_CONFIRMATION_HR if self.locale == 'hr' else ORDER_CONFIRMATION_EN
        return internal_subject, customer_subject

    def determine_message_and_html_template(self, contact_form: bool) -> Tuple[str, str]:
        return None, None

    def send(self) -> None:
        with get_connection() as connection:
            message: str = self.request_data.get('message')
            send_mail(
                connection=connection,
                subject=self.customer_subject,
                message=self.request_data.get('Message', ''),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=self.recipient,
                html_message='<strong></strong>'
            )
            mail_admins(
                subject=self.internal_subject,
                message=self.request_data.get('Message', ''),
                connection=connection
            )
