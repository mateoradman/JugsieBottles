const {PrismaClient} = require('@prisma/client')
const { bottles } = require('faq_en')
const { faq_en } = require ('bottles')

const prisma = new PrismaClient()

async function main() {
    bottles.forEach(
        async bottle => {
            await prisma.bottle.create({
                data: bottle
            })
        })
    faq_en.forEach(
        async faq => {
            await prisma.faq.create({
                data: faq
            })
        }
    )
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })