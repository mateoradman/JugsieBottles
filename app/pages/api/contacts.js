import { withSentry } from '@sentry/nextjs';
import { emptyEmailValidation, emptyMessageValidation, emptyPhoneNumberValidation, emptyStringValidation } from '../../components/checkout/FormFields';
import prisma from '../../lib/prisma';
import { JUGSIE_EMAIL } from '../../utils/constants';
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function contactHandler(req, res) {
    if (!req.headers.referer || !req.headers.referer.endsWith("/contact")) {
        return res.status(401).json({ error: "Unauthorized." });
    }
    if (req.method !== "POST") {
        // Method not supported
        return res.status(405).json({ error: "Method not supported." });
    }

    const requestBody = JSON.parse(req.body);
    const bodyIsValid = await isBodyValid(requestBody);
    if (!bodyIsValid) {
        return res.status(400).json({ error: "Bad or unauthorized request." });
    }

    const contact = await prisma.contact.create({
        data: {
            message: requestBody.message,
            locale: requestBody.locale,
            customer: {
                connectOrCreate: {
                    create: {
                        firstName: requestBody.firstName,
                        lastName: requestBody.lastName,
                        email: requestBody.email,
                        phone: requestBody.phone
                    },
                    where: {
                        email: requestBody.email,
                    }
                }
            },
        },
    });
    const msg = {
        to: process.env.ADMIN_EMAIL,
        cc: process.env.SECOND_ADMIN_EMAIL,
        from: JUGSIE_EMAIL,
        subject: "Nova poruka s web stranice",
        text: `Imate novu poruku od ${requestBody.firstName} ${requestBody.lastName} (tel: ${requestBody.phone}). 
        Poruka: "${requestBody.message}".`,
    }
    sgMail.send(msg);
    // TODO send email to the customer as well using the template
    return res.status(201).json({ contact });
}

const isBodyValid = async (body) => {
    // Backend validation
    return (
        emptyStringValidation(body.firstName) &&
        emptyStringValidation(body.lastName) &&
        emptyEmailValidation(body.email) &&
        emptyPhoneNumberValidation(body.phone) &&
        emptyMessageValidation(body.message)
    )
};

export default withSentry(contactHandler);