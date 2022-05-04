import prisma from '../../lib/prisma'

export default async function createContact(req, res) {
    if (!req.headers.referer || !req.headers.referer.endsWith("/contact")) {
        return res.status(401).json({ error: "Unauthorized." });
    }

    if (req.method === "POST") {
        const { firstName, lastName, email, phone, message, locale } = JSON.parse(req.body);
        const contact = await prisma.contact.create({
            data: {
                phone: phone,
                message: message,
                locale: locale,
                customer: {
                    connectOrCreate: {
                        create: {
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                        },
                        where: {
                            email: email,
                        }
                    }
                },
            },
        });
        return res.status(201).json({ contact });
    } else {
        // Method not supported
        return res.status(405).json({ error: "Method not supported." });
    }
}