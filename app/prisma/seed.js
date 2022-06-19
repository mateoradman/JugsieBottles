const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const bottles = [
  {
    name: 'Jugsie Bottle',
    colour: "Blue",
    price: 130,
  },
  {
    name: 'Jugsie Bottle',
    colour: "Green",
    price: 130,
  },
  {
    name: 'Jugsie Bottle',
    colour: "White",
    price: 130,
  },
  {
    name: 'Jugsie Bottle',
    colour: "Hot Pink",
    price: 130,
  },
  {
    name: 'Jugsie Bottle',
    colour: "Turquoise",
    price: 130,
  },
  {
    name: 'Jugsie Bottle',
    colour: "Black",
    price: 130,
  },
  {
    name: 'Jugsie Bottle',
    colour: "Lilac",
    price: 130,
  },
]
const faq_en = [
  {
    "question": "What are Jugsie bottles made from?",
    "answer": "Jugsie bottles are made from 18/8 stainless steel (18% chromium and 8% nickel) on both the inside and outside. The lid is made from stainless steel, plastic and a silicon o-ring.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Where are Jugsie bottle made?",
    "answer": "Jugsie is a Croatian-based business and our products are manufactured in China.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "What is the size and weight of Jugsie bottles?",
    "answer": "500 ml bottles: height of 26cm, width of 7cm, and weights only 0.38kg.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Are Jugsie bottles durable?",
    "answer": "Jugsie bottles are made from high-grade stainless steel on both the inside and outside which makes them extremely durable. However, we still advise you to take caution with your bottle as our warranty does not cover accidental damage.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Are Jugsie bottles leak-proof?",
    "answer": "Yes, Jugsie bottles are designed to be leak-proof. Our bottles have an airtight lid with a silicone o-ring which prevents any leaking and helps maintain the temperature of drinks.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Do Jugsie bottles keep drinks hot?",
    "answer": "Yes, Jugsie bottles can keep drinks hot for up to 12 hours. In order to get the best out of your Jugsie bottle, we recommend filling your bottle with boiling water first to heat the bottle, then emptying the water and filling your hot drink. This way, your hot drink will stay hot for longer. Depending on how many times the bottle is opened and the temperature of the drink, the 12-hour result is likely to vary.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Do Jugsie bottles fit in car cup holders?",
    "answer": "Jugsie bottles fit in the vast majority (standard size) of car cup holders. However, we recommend checking the size of your cup holder and the size of the bottle first.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Can I take my Jugsie bottle through airport security?",
    "answer": "Yes, you should be able to take your Jugsie bottle through airport security as long as the bottle is empty. However, some airports allow liquids, while some even do not allow empty bottles \u2013 therefore better check with the airport before flying.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Are Jugsie bottles BPA-free?",
    "answer": "Yes \u2013 Jugsie bottles and lids and BPA-free.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "How should I clean my Jugsie bottle?",
    "answer": "We recommend cleaning your bottle after each use with hot water (use soap if needed), however do not leave the bottle to soak. Rather, clean it and leave the lid open to dry to prevent any unwanted smell or taste. When not using your bottle, leave the lid open. ",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Can I use a dishwasher?",
    "answer": "No, Jugsie bottles are not suitable for dishwashers.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Can I put my Jugsie bottle in the fridge or freezer?",
    "answer": "We would not advise putting Jugsie bottles in the fridge or the freezer. This is because this will have no effect on the bottle due to the double-wall vacuum insulation. This technology means the bottle is not affected by the outside temperature so the fridge or the freezer will not be able to cool the contents inside. It has also been known to crack the bottle and break the vacuum seal if left in the freezer. For best results for cold water, we recommend using very cold water from the fridge or tap and filling your Jugsie bottle with ice cubes.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Can I put my Jugsie bottle in the microwave?",
    "answer": "As you probably know, metals and microwaves do not mix together, so please do not put your bottle in the microwave.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Other than water, what liquids can I use in my Jugsie bottle?",
    "answer": "Jugsie bottles are primarily known and designed for water-lovers. However, it is perfectly fine to use it for any alcoholic and fizzy drink, soups, milk or coffee. Just make sure to thoroughly clean it afterwards using warm soapy water.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Can I personalize my Jugsie bottle?",
    "answer": "Yes \u2013 for now we offer engraving your Jugsie bottle. Soon, we will offer you some more accessories that will allow for even greater personalization.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Can I engrave symbols on my Jugsie bottle?",
    "answer": "Yes! We know how much people love symbols, which is why we allow you to choose from several symbols to engrave on your Jugsie bottle to make it as personalized as it can be! Of course, you can choose only letters or symbols, or both \u2013 it\u2019s up to you. A maximum number of signs is 10.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Can I buy replacement caps?",
    "answer": "For now, we only offer caps that come together with your chosen Jugsie bottle. Soon, you will have more options to choose from.",
    "section": "General",
    "locale": "en",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Where is my confirmation email?",
    "answer": "You should receive your confirmation email within few minutes after the purchase has been completed.",
    "section": "Orders and Delivery",
    "locale": "en",
    "icon": "TruckIcon"
  },
  {
    "question": "I haven\u2019t received my confirmation email",
    "answer": "Please, check your spam box as these sometimes get lost in there! If there still isn\u2019t a sign of it, please contact our customer service.",
    "section": "Orders and Delivery",
    "locale": "en",
    "icon": "TruckIcon"
  },
  {
    "question": "Can I track my order?",
    "answer": "Yes, after your Jugsie bottle is shipped, you will receive the tracking information which allow you to track your Jugsie from our warehouse to your house!",
    "section": "Orders and Delivery",
    "locale": "en",
    "icon": "TruckIcon"
  },
  {
    "question": "I received a wrong order",
    "answer": "We are very sorry that you received the wrong order! Please contact our customer service on info@jugsie.com and we\u2019ll be in touch shorty.",
    "section": "Orders and Delivery",
    "locale": "en",
    "icon": "TruckIcon"
  },
  {
    "question": "How much does shipping cost? How long does the delivery take?",
    "answer": "For orders over 100 HRK, we offer a free delivery which takes 7-10 working days to be delivered to your address. For orders under 100HRK, the delivery costs 20HRK.",
    "section": "Orders and Delivery",
    "locale": "en",
    "icon": "TruckIcon"
  },
  {
    "question": "How do you ship Jugsie bottles?",
    "answer": "We ship Jugsie bottles within Croatia with GLS. We are not delivering outside Croatia at the moment but we are seeking to expand.",
    "section": "Orders and Delivery",
    "locale": "en",
    "icon": "TruckIcon"
  },
  {
    "question": "Do you ship Jugsie outside Croatia?",
    "answer": "Unfortunately, no. For now, we only ship Jugsie bottles within Croatia. However, we expect to ship in Europe in the following several months.",
    "section": "Orders and Delivery",
    "locale": "en",
    "icon": "TruckIcon"
  },
  {
    "question": "Can I return my order?",
    "answer": "Yes, you can return your Jugsie bottle within 30 days from purchase.* All Jugsie bottles are covered against manufacturing defects for one year after purchase. Please note that for any kind of return/replacement, we need a proof of purchase.*Personalized and used Jugsie bottles cannot be returned. \\tAs long as your Jugsie bottle has not been used or is not personalized, we will issue a full refund once the item has been received by us at our warehouse. Please note that the cost of return needs to be covered by the customer.\\tAll deliveries come with a return address sticker. Jugsie cannot be held responsible for any returns that are lost in the post, which is why we strongly recommend using a signed for service when posting returns to us.\\tPlease ensure that all returns reach us in a saleable condition. For example, please do not affix any stickers to the packaging.",
    "section": "Returns",
    "locale": "en",
    "icon": "ReceiptRefundIcon"
  },
  {
    "question": "Can I cancel my order?",
    "answer": "We cannot guarantee that your order can be cancelled, however contact us on info@jugsie.com as soon as you know you want to cancel your order, so there may be opportunity to cancel it. In case it is possible to cancel your order, you will receive a full refund. Otherwise, you can always return your unused/non-personalized bottle within 30 days.",
    "section": "Returns",
    "locale": "en",
    "icon": "ReceiptRefundIcon"
  },
  {
    "question": "My order arrived damaged",
    "answer": "We are very sorry that your order arrived damaged. If the product is damaged in transit, then we will replace it free of charge. Please do not send us the faulty products, but rather contact us as soon as possible (info@jugsie.com).",
    "section": "Returns",
    "locale": "en",
    "icon": "ReceiptRefundIcon"
  },
  {
    "question": "What is covered by the warranty?",
    "answer": "Jugsie bottles are designed to be used for a lifetime. However, if something does go wrong, our warranty covers you against manufacturing defects for one year from the date of purchase. All you need is a proof of purchase which can verify the date of purchase and ensure the authenticity of the product. As Jugsie bottles are all about reducing waste, we are proud to say we offer appropriate replacements of faulty parts of Jugsie bottles, rather than replacing a whole bottle for a new one. If the same color is not available, we will do our best to match the original. General wear and tear, such as scratches and dents, are not covered by warranty. Also, damage caused by incorrect cleaning or modifications by third parties is also not included in our warranty.",
    "section": "Returns",
    "locale": "en",
    "icon": "ReceiptRefundIcon"
  },
  {
    "question": "What is covered by the warranty?",
    "answer": "Jugsie bottles are designed to be used for a lifetime. However, if something does go wrong, our warranty covers you against manufacturing defects for one year from the date of purchase. All you need is a proof of purchase which can verify the date of purchase and ensure the authenticity of the product. As Jugsie bottles are all about reducing waste, we are proud to say we offer appropriate replacements of faulty parts of Jugsie bottles, rather than replacing a whole bottle for a new one. If the same color is not available, we will do our best to match the original. General wear and tear, such as scratches and dents, are not covered by warranty. Also, damage caused by incorrect cleaning or modifications by third parties is also not included in our warranty.",
    "section": "Returns",
    "locale": "en",
    "icon": "ReceiptRefundIcon"
  },
  {
    "question": "Claims under warranty",
    "answer": "If you think your item is faulty, please get in touch with us first and we\u2019ll be happy to look into it. Please describe what is wrong and attach a photo of your item. Faulty products are eligible for refunds up to thirty days after purchase. Afterwards, we can only offer replacements under warranty. Kindly note that warranty does not restart when you receive a replacement bottle.",
    "section": "Returns",
    "locale": "en",
    "icon": "ReceiptRefundIcon"
  },
  {
    "question": "Products that arrive damaged",
    "answer": "If your order arrives damaged, please do not use it as it will void the warranty. Please contact us with the images of a faulty bottle and we\u2019ll be more than happy to replace it.",
    "section": "Returns",
    "locale": "en",
    "icon": "ReceiptRefundIcon"
  }
]

async function main() {
  for (const bottle of bottles) {
    await prisma.bottle.upsert({
      where: {colour: bottle.colour},
      update: {},
      create: bottle,
    })
  }
  for (const faq of faq_en) {
    await prisma.faq.upsert({
      where: {question: faq.question},
      update: {},
      create: faq,
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })