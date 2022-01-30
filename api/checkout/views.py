from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .TwoCheckoutAPIClient import TwoCheckoutAPIClient


@api_view(['POST'])
def pay(request):
    api_client = TwoCheckoutAPIClient()
    response_data = {"error": "Order not created."}
    response_code = status.HTTP_400_BAD_REQUEST
    twocheckout_response = api_client.send_request_to_endpoint(
        'orders/', method='POST', data=request.data)
    if twocheckout_response is not None and twocheckout_response.status_code == 201:
        response_data = {"success": "Order created."}
        response_code = status.HTTP_201_CREATED
    custom_response = Response(data=response_data, status=response_code)
    return custom_response
