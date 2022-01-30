import { getAuthToken, getDefaultRequest } from "../../utils/api";
import { DEFAULT_CURRENCY } from "../../utils/constants";
import { getCartTotalPrice } from "../../utils/general";

export default async function paymentProtocol(req, res) {
  if (!req.headers.referer || !req.headers.referer.endsWith("/checkout")) {
    return res.status(401).json({ error: "Unauthorized." });
  }

  if (req.method === "POST") {
    const bodyIsValid = await isBodyValid(req.body);
    if (!bodyIsValid) {
      return res.status(400).json({ error: "Bad or unauthorized request." });
    }
    let authHeader = await getAuthToken();
    const customRequestDetails = getDefaultRequest("POST");
    customRequestDetails.headers["Authorization"] = authHeader;
    customRequestDetails.headers["X-CSRFToken"] = req.cookies["csrftoken"];
    customRequestDetails.body = req.body;
    submitOrderToRestAPI(customRequestDetails);
    await pay(customRequestDetails, res);
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const isBodyValid = async (requestBody) => {
  const body = JSON.parse(requestBody);
  if (
    !body.Currency ||
    body.Currency !== DEFAULT_CURRENCY ||
    !body.Source ||
    !body.ExternalCustomerReference ||
    !body.ExternalCustomerReference.startsWith("_") ||
    !body.DeliveryDetails ||
    !body.BillingDetails ||
    !body.PaymentDetails
  ) return false;
  return true;
};

const submitOrderToRestAPI = async (originalRequest) => {
  const requestObjCopy = JSON.parse(JSON.stringify(originalRequest));
  const originalBody = JSON.parse(requestObjCopy.body);
  const customerData = {
    first_name: originalBody.DeliveryDetails.FirstName,
    last_name: originalBody.DeliveryDetails.LastName,
    email: originalBody.DeliveryDetails.Email,
  };
  const customer = await createObjInDatabase(
    requestObjCopy,
    customerData,
    "shop/customers/"
  );
  if (customer.id) {
    const shippingAddressData = {
      street_address: originalBody.DeliveryDetails.Address1,
      city: originalBody.DeliveryDetails.City,
      country: originalBody.DeliveryDetails.CountryCode,
      zip_code: originalBody.DeliveryDetails.Zip,
      address_type: "S",
    };
    const billingAddressData = {
      street_address: originalBody.BillingDetails.Address1,
      city: originalBody.BillingDetails.City,
      country: originalBody.BillingDetails.CountryCode,
      zip_code: originalBody.BillingDetails.Zip,
      address_type: "B",
    };
    const orderItemsData = originalBody.CartData;
    const shippingAddress = await createObjInDatabase(requestObjCopy, shippingAddressData, "shop/addresses/");
    const billingAddress = await createObjInDatabase(requestObjCopy, billingAddressData, "shop/addresses/");
    const orderItems = await createObjInDatabase(requestObjCopy, orderItemsData, "shop/order-items/");
    const orderData = {
      customer: customer.id,
      items: orderItems,
      total_price: getCartTotalPrice(originalBody.CartData),
      currency: originalBody.Currency,
      shipping_address: shippingAddress.id,
      billing_address: billingAddress.id,
    };
    await createObjInDatabase(requestObjCopy, orderData, "shop/orders/");
  }
};

const createObjInDatabase = async (requestObj, data, url) => {
  requestObj.body = JSON.stringify(data);
  const customerUrl = new URL(url, process.env.API_HOST);
  const response = await fetch(customerUrl.href, requestObj);
  return response.json();
};

const pay = async (customRequestDetails, res) => {
  const paymentUrl = new URL("checkout/pay/", process.env.API_HOST);
  await fetch(paymentUrl.href, customRequestDetails)
    .then((response) => {
      if (response.ok) {
        res.status(200).json({ success: "Order sucessfully submitted." });
      } else {
        return res.status(400).json({ error: "Order was not submitted." });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
