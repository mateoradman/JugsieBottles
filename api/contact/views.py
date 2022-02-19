from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import BadHeaderError

from .EmailSender import EmailSender


@api_view(['POST'])
def contact(request):
    response_code: int = status.HTTP_400_BAD_REQUEST
    recipient: str = request.data.get('Email')
    locale: str = request.data.get('Locale', 'hr')
    if recipient:
        email_sender: EmailSender = EmailSender(recipient=recipient,
                                                data=request.data,
                                                locale=locale,
                                                contact_form=True)
        try:
            email_sender.send()
            response_code: int = status.HTTP_202_ACCEPTED
        except BadHeaderError:
            pass
    return Response(status=response_code)
