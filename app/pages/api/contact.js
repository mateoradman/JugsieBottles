import { getAuthToken, getDefaultRequest } from "../../utils/api";

export default async function contact(req, res) {
    if (!req.headers.referer || !req.headers.referer.endsWith("/contact")) {
        return res.status(401).json({ error: "Unauthorized." });
    }

    if (req.method === "POST") {
        const authHeader = await getAuthToken();
        const customRequestDetails = getDefaultRequest("POST");
        customRequestDetails.headers["Authorization"] = authHeader;
        customRequestDetails.headers["X-CSRFToken"] = req.cookies["csrftoken"];
        customRequestDetails.body = req.body;
        const paymentUrl = new URL("contact/", process.env.API_HOST);
        await fetch(paymentUrl.href, customRequestDetails)
            .then((response) => {
                if (response.ok) {
                    res.status(200).json({ success: "Contact sucessfully submitted." });
                } else {
                    return res.status(400).json({ error: "Contact was not submitted." });
                }
            })
            .catch((err) => {
                res.status(500).json({ error: err });
            });
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}