import { withSentry } from '@sentry/nextjs';
import prisma from '../../lib/prisma';
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function contactHandler(req, res) {
    if (!req.headers.referer || !req.headers.referer.endsWith("/contact")) {
        return res.status(401).json({ error: "Unauthorized." });
    }

    if (req.method === "POST") {
        const { firstName, lastName, email, phone, message, locale } = JSON.parse(req.body);
        const contact = await prisma.contact.create({
            data: {
                message: message,
                locale: locale,
                customer: {
                    connectOrCreate: {
                        create: {
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            phone: phone
                        },
                        where: {
                            email: email,
                        }
                    }
                },
            },
        });
        const msg = {
            to: 'info@jugsie.com',
            from: 'info@jugsie.com',
            subject: "Nova poruka s web stranice",
            text: `Imate novu poruku od ${firstName} ${lastName} (tel: ${phone}). Poruka: "${message}".`,
        }
        sgMail.send(msg)
        // TODO send email to the customer as well using the template
        return res.status(201).json({ contact });
    } else {
        // Method not supported
        return res.status(405).json({ error: "Method not supported." });
    }
}

export default withSentry(contactHandler);