import { withSentry } from "@sentry/nextjs";
import { DateTime } from "luxon";
import { nanoid } from "nanoid";
import {
  emptyEmailValidation,
  emptyPhoneNumberValidation,
  emptyStringValidation,
} from "../../components/checkout/FormFields";
import prisma from "../../lib/prisma";
import { JUGSIE_EMAIL } from "../../utils/constants";
import { getCartTotalPrice } from "../../utils/general";

const UUIDlength = 12;

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function orderHandler(req, res) {
  if (!req.headers.referer || !req.headers.referer.endsWith("/checkout")) {
    return res.status(401).json({ error: "Unauthorized." });
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  let parsedBody = JSON.parse(req.body);
  let totalPrice = getCartTotalPrice(parsedBody.items);
  let requestBody = {
    ...parsedBody,
    orderUUID: nanoid(UUIDlength),
    timestamp: DateTime.now()
      .setZone("Europe/Zagreb")
      .toFormat("dd.MM.yyyy HH:MM"),
    total: totalPrice,
    subtotal: 0.75 * totalPrice,
    vat: 0.25 * totalPrice,
  };
  const bodyIsValid = await isBodyValid(requestBody);
  if (!bodyIsValid) {
    return res.status(400).json({ error: "Bad or unauthorized request." });
  }

  // Create an order in the database
  const addressData = {
    street: requestBody.street,
    city: requestBody.city,
    zip: requestBody.zip,
    country: requestBody.country,
    isShipping: true,
  };

  const order = await prisma.order.create({
    data: {
      orderUUID: requestBody.orderUUID,
      customer: {
        connectOrCreate: {
          where: { email: requestBody.email },
          create: {
            firstName: requestBody.firstName,
            lastName: requestBody.lastName,
            email: requestBody.email,
            phone: requestBody.phone,
          },
        },
      },
      locale: requestBody.locale,
      address: {
        connectOrCreate: {
          create: addressData,
          where: {
            fullAddress: addressData,
          },
        },
      },
      // TODO: add support for coupons.
      coupon: undefined,
      // TODO add other payment options.
    },
  });

  // Save addOrderItem objects to the db.
  await Promise.all(
    requestBody.items.map(async (item) => {
      const bottle = await prisma.bottle.findUnique({
        where: { colour: item.name },
      });
      await prisma.orderItem.create({
        data: {
          bottleId: bottle.id,
          quantity: 1,
          personalizationIcon: item.icon === "" ? undefined : item.icon,
          personalizationText: item.text,
          price: item.price,
          orderId: order.id,
        },
      });
    })
  );
  // Send a confirmation email to the customer and to us.
  const emails = [
    {
      from: JUGSIE_EMAIL,
      to: requestBody.email,
      // select templateId based on locale
      templateId:
        requestBody.locale === "hr"
          ? "d-5b15fec07a3d42c9b0ab32ce2d0a1222"
          : "d-5313c6665ab44223b4e6a80df20a571f",
      dynamicTemplateData: {
        ...requestBody,
      },
    },
    {
      to: process.env.ADMIN_EMAIL,
      cc: process.env.SECOND_ADMIN_EMAIL,
      from: JUGSIE_EMAIL,
      subject: "Nova narudzba s web stranice.",
      text: `Detalji o narudžbi:
            Ime: ${requestBody.firstName}
            Prezime: ${requestBody.lastName}
            Adresa: ${requestBody.street}, ${requestBody.zip} ${
        requestBody.city
      }, ${requestBody.country}
            Broj telefona: ${requestBody.phone}
            Narudžba se sastoji od sljedećih proizvoda: ${JSON.stringify(
              requestBody.items
            )}.
            Ukupno: ${requestBody.total}`,
    },
  ];
  sgMail.send(emails);
  return res.status(201).json({ order });
}

const isBodyValid = async (body) => {
  // Backend validation
  return (
    emptyStringValidation(body.firstName) &&
    emptyStringValidation(body.lastName) &&
    emptyEmailValidation(body.email) &&
    body.orderUUID.length === UUIDlength &&
    emptyStringValidation(body.street) &&
    emptyPhoneNumberValidation(body.phone)
  );
};

export default withSentry(orderHandler);
