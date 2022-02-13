import datetime
import hmac
import logging
from typing import Any, Dict, Optional
from urllib.parse import urljoin

import requests
from api import settings

log = logging.getLogger(__name__)


class TwoCheckoutAPIClient:
    def __init__(self) -> None:
        self.API_URL: str = settings.TWOCHECKOUT_API_URL
        self.API_SECRET_KEY: str = settings.TWOCHECKOUT_API_SECRET_KEY
        self.API_MERCHANT_CODE: str = settings.TWOCHECKOUT_API_MERCHANT_CODE
        self.TIMEOUT: int = 20

    def _get_authentication_header(self) -> Dict[str, str]:
        timestamp: str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        string_to_hash: str = f"{len(self.API_MERCHANT_CODE)}{self.API_MERCHANT_CODE}{len(timestamp)}{timestamp}"
        hmac_object: hmac.HMAC = hmac.new(key=self.API_SECRET_KEY.encode(),
                                          msg=string_to_hash.encode(), digestmod='md5')
        md5_hash: str = hmac_object.hexdigest()
        authentication_header: Dict[str, str] = {
            'X-Avangate-Authentication': f'code="{self.API_MERCHANT_CODE}" date="{timestamp}" hash="{md5_hash}"'}
        return authentication_header

    def _get_generic_headers(self) -> Dict[str, str]:
        authentication_header: Dict[str,
                                    str] = self._get_authentication_header()
        headers: Dict[str, str] = {"Content-Type": "application/json",
                                   "Accept": "application/json", **authentication_header}
        return headers

    def send_request_to_endpoint(self, endpoint: str,
                                 **kwargs) -> Optional[requests.Response]:
        response: Optional[requests.Response] = None
        method: str = kwargs.get('method', 'GET')
        if not isinstance(method, str):
            log.error('Request method must be a string.')
            return response
        else:
            method: str = method.upper()
        if endpoint.startswith('/'):
            # Remove leading slash
            endpoint: str = endpoint.replace('/', '', 1)
        url: str = urljoin(self.API_URL, endpoint)
        headers: Dict[str, str] = self._get_generic_headers()
        generic_message: str = "occurred upon sending a GET request to the API."
        try:
            if method == 'POST':
                data: Dict[str, Any] = kwargs.get('data', {})
                if not data:
                    log.error('POST request must contain data keyword.')
                response: requests.Response = requests.post(
                    url, json=data, headers=headers, timeout=self.TIMEOUT)
                if response is not None and not response.ok:
                    log.error(response.json())
            elif method == 'GET':
                response: requests.Response = requests.get(
                    url, timeout=self.TIMEOUT, headers=headers)
        except requests.exceptions.ConnectionError:
            log.error(f"Connection error {generic_message}")
        except requests.exceptions.Timeout:
            log.error(f"Timeout {generic_message}")
        except requests.exceptions.TooManyRedirects:
            log.error(f"Too many redirects {generic_message}")
        except requests.exceptions.RequestException:
            log.error(f"Ambiguous exception {generic_message}")
        return response
