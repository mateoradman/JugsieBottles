from typing import Dict, Optional

import requests
from contact.EmailSender import EmailSender
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .TwoCheckoutAPIClient import TwoCheckoutAPIClient


@api_view(['POST'])
def pay(request):
    response_data: Dict[str, str] = {"error": "Order not created."}
    response_code: int = status.HTTP_400_BAD_REQUEST
    api_client: TwoCheckoutAPIClient = TwoCheckoutAPIClient()
    twocheckout_response: Optional[requests.Response] = api_client.send_request_to_endpoint(
        'orders/', method='POST', data=request.data)
    if isinstance(twocheckout_response, requests.Response):
        if twocheckout_response.status_code == 201:
            response_data = {"success": "Order created."}
            response_code = status.HTTP_201_CREATED
            recipient: Optional[str] = request.data.get('DeliveryDetails', {}).get('Email')
            locale: str = request.data.get('Locale', 'hr')
            if recipient:
                email_sender: EmailSender = EmailSender(recipient=recipient, data=request.data, locale=locale)
                email_sender.send()
        else:
            response_data = twocheckout_response.json()
            response_code = twocheckout_response.status_code
    custom_response: Response = Response(data=response_data, status=response_code)
    return custom_response
