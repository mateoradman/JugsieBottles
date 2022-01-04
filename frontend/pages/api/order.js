import { getAuthToken, getDefaultRequest } from "../../utils/api";

export default async function submitOrderToDjangoAPI(req, res) {
  if (!req.headers.referer || !req.headers.referer.endsWith("/checkout")) {
    return res.status(401).json({ error: "Unauthorized." });
  }

  if (req.method === "POST") {
    const bodyIsValid = await isBodyValid(req.body);
    if (!bodyIsValid) {
      return res.status(400).json({ error: "Bad or unauthorized request." });
    }
    let authHeader = await getAuthToken();
    console.log("req :>> ", req);
    console.log(`req.headers.referer`, req.headers.referer);
    const customRequestDetails = getDefaultRequest("POST");
    customRequestDetails.body = req.body;
    customRequestDetails.headers["Authorization"] = authHeader;
    customRequestDetails.headers["X-CSRFToken"] = req.cookies["csrftoken"];
    const url = new URL("shop/test/", process.env.API_HOST);
    await fetch(url.href, customRequestDetails)
      .then((response) => response.json())
      .then(() => res.status(200).json({ success: "Order sucessfully submitted." }))
      .catch(() => res.status(500).json({ error: "REST API unable to process your request." }));
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const isBodyValid = async (requestBody) => {
  const body = JSON.parse(requestBody);
  if (
    !body.Currency ||
    body.Currency !== "HRK" ||
    !body.Source ||
    !body.ExternalCustomerReference ||
    !body.ExternalCustomerReference.startsWith("_") ||
    !body.ShippingDetails ||
    !body.BillingDetails ||
    !body.PaymentMethod
  ) {
    return false;
  } else return true;
};
