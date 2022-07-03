const { PrismaClient } = require('@prisma/client')

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
const faqs = [
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
    "answer": "Yes - Jugsie bottles and lids and BPA-free.",
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
    "answer": "Yes - for now we offer engraving your Jugsie bottle. Soon, we will offer you some more accessories that will allow for even greater personalization.",
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
    "answer": "Jugsie bottles are designed to be used for a lifetime. However, if something does go wrong, our warranty covers you against manufacturing defects. All you need is a proof of purchase which can verify the date of purchase and ensure the authenticity of the product. As Jugsie bottles are all about reducing waste, we are proud to say we offer appropriate replacements of faulty parts of Jugsie bottles, rather than replacing a whole bottle for a new one. If the same color is not available, we will do our best to match the original. General wear and tear, such as scratches and dents, are not covered by warranty. Also, damage caused by incorrect cleaning or modifications by third parties is also not included in our warranty.",
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
    "answer": "If your order arrives damaged, please do not use it as it will void the warranty. Please contact us with the images of a faulty bottle and we will be more than happy to replace it.",
    "section": "Returns",
    "locale": "en",
    "icon": "ReceiptRefundIcon"
  },
  {
    "question": "Od čega je izrađena Jugsie boca?",
    "answer": "Jugsie boca izrađena je od nehrđajućeg čelika 18/8 (18% kroma i 8% nikla) s unutarnje i vanjske strane. Poklopac je izrađen od nehrđajućeg čelika, plastike i silikonskog o-prstena.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Gdje se izrađuje Jugsie boca?",
    "answer": "Jugsie je tvrtka sa sjedištem u Hrvatskoj, a naši proizvodi se proizvode u Kini.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Koja je veličina i težina bočica Jugsie?",
    "answer": "Boce od 500 ml: visina 26 cm, širina 7 cm i težina 0,38 kg.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Jesu li Jugsie bočice izdržljive?",
    "answer": "Jugsie boce izrađene su od visokokvalitetnog nehrđajućeg čelika s unutarnje i vanjske strane što ih čini izuzetno izdržljivima. Ipak, savjetujemo vam da budete oprezni s bocom jer naše jamstvo ne pokriva slučajne štete.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Jesu li Jugsie boce nepropusne?",
    "answer": "Da, Jugsie je dizajniran tako da ne propušta vodu. Naše boce imaju nepropusni poklopac sa silikonskim o-prstenom koji sprječava curenje i pomaže u održavanju temperature pića.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Održavaju li Jugsie bočice pića vrućima?",
    "answer": "Da, Jugsie boce mogu držati pića vrućim do 12 sati. Kako biste iz svoje Jugsie boce izvukli najbolje, preporučujemo da bocu najprije napunite kipućom vodom da biste je zagrijali, a zatim ispraznite vodu i napunite odabrani topli napitak. Tako će vaš topli napitak dulje ostati vruć. Ovisno o tome koliko se puta bočica otvori i o temperaturi pića, rezultat od 12 sati može varirati.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Odgovara li veličina Jugsie bočice držaču za čaše u automobilu?",
    "answer": "Jugsie boce su standardne veličine te odgovaraju velikoj većini (standardne veličine) držača za automobilske čaše. Međutim, preporučujemo da prvo provjerite veličinu držača za čaše i veličinu boce.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Mogu li svoju Jugsie bocu ponijeti kroz osiguranje u zračnoj luci?",
    "answer": "Da, trebali biste moći provesti svoju bocu Jugsie kroz osiguranje zračne luke sve dok je boca prazna. Međutim, neke zračne luke dopuštaju tekućinu, dok neke čak ne dopuštaju prazne boce - zato je bolje provjeriti u zračnoj luci prije leta.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Jesu li bočice Jugsie bez BPA?",
    "answer": "•	Da - Jugsie bočice i poklopci bez BPA.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Kako mogu očistiti Jugsie bocu?",
    "answer": "Preporučujemo čišćenje boce nakon svake upotrebe toplom vodom (po potrebi upotrijebite sapun), no bocu nemojte ostavljati da se natopi. Radije ju očistite i ostavite poklopac otvoren da se osuši kako biste spriječili pojavljivanje neželjenog mirisa ili okusa. Kad ne upotrebljavate bocu, ostavite poklopac otvorenim.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Mogu li koristiti perilicu posuđa?",
    "answer": "Ne, bočice Jugsie nisu prikladne za perilice posuđa.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Mogu li svoju Jugsie bočicu staviti u hladnjak ili zamrzivač?",
    "answer": "Ne bismo savjetovali stavljanje boca Jugsie u hladnjak ili zamrzivač. To je zato što to neće imati utjecaja na bocu zbog dvostruke stijenke vakuumske izolacije. Ova tehnologija znači da vanjska temperatura na bocu ne utječe, tako da hladnjak ili zamrzivač neće moći rashladiti sadržaj unutra. Također je moguće da dođe do malih puknuća i slomi vakuumsku brtvu ako se ostavi u zamrzivaču. Za najbolje rezultate hladne vode preporučujemo upotrebu vrlo hladne vode iz hladnjaka ili slavine i punjenje Jugsie boce kockicama leda.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Mogu li svoju Jugsie bočicu staviti u mikrovalnu?",
    "answer": "Kao što već vjerojatno znate, metali i mikrovalna ne idu zajedno. Stoga, nemojte stavljati bočicu Jugsie u mikrovalnu pećnicu jer za nju nije prikladna.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Osim vode, koje tekućine mogu koristiti u boci Jugsie?",
    "answer": "Jugsie boce su prvenstveno poznate i dizajnirane za ljubitelje vode. Međutim, sasvim je u redu koristiti ga za bilo koje drugo piće, bilo alkoholno ili gazirano piće, juhu, mlijeko ili kavu. Pazite da ga nakon toga temeljito očistite toplom vodom sa sapunom kako bi tvoja Jugsie boca bila spremna za ponovno korištenje.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Mogu li personalizirati svoju Jugsie bočicu?",
    "answer": "Da - za sada nudimo graviranje Vaše Jugsie boce. Uskoro ćemo Vam ponuditi još nekoliko dodataka koji će omogućiti još veću personalizaciju.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Mogu li ugravirati simbole na svoju bočicu Jugsie?",
    "answer": "Da! Znamo koliko ljudi vole simbole, zbog čega vam dopuštamo da odaberete između nekoliko simbola koji ćete ugravirati na svoju Jugsie bočicu kako biste je učinili što personaliziranijom! Naravno, možete odabrati samo slova ili simbole, ili oboje - na vama je. Maximalan broj znakova je 10",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Mogu li kupiti zamjenske čepove?",
    "answer": "Za sada nudimo samo čepove koji dolaze uz odabranu Jugsie bocu. Uskoro ćete imati više mogućnosti za odabir.",
    "section": "Generalno",
    "locale": "hr",
    "icon": "InformationCircleIcon"
  },
  {
    "question": "Gdje je moja e-pošta s potvrdom?",
    "answer": "Trebali biste primiti e-poštu s potvrdom u roku od nekoliko minuta nakon završetka kupnje.",
    "section": "Narudžbe i dostava",
    "locale": "hr",
    "icon": "TruckIcon"
  },
  {
    "question": "Nisam primio e-poštu s potvrdom",
    "answer": "Molimo vas, provjerite svoju neželjenu poštu jer se e-pošta ponekad tamo izgubi. Ako još uvijek nema tragova, kontaktirajte našu službu za korisnike.",
    "section": "Narudžbe i dostava",
    "locale": "hr",
    "icon": "TruckIcon"
  },
  {
    "question": "Mogu li pratiti svoju narudžbu?",
    "answer": "Da, nakon što je Vaša Jugie boca poslana, primit ćete e-poštu s informacijama o praćenju koja će omogućiti praćenje Vaše narudžbe od našeg skladišta do Vaših vrata.",
    "section": "Narudžbe i dostava",
    "locale": "hr",
    "icon": "TruckIcon"
  },
  {
    "question": "Primio sam pogrešnu narudžbu.",
    "answer": "Žao nam je što ste primili pogrešnu narudžbu! Molimo kontaktirajte našu službu za korisnike na info@jugsie.com i uskoro ćemo vas kontaktirati.",
    "section": "Narudžbe i dostava",
    "locale": "hr",
    "icon": "TruckIcon"
  },
  {
    "question": "Koliko košta poštarina i koliko traje dostava?",
    "answer": "Za narudžbe veće od 100 HRK nudimo besplatnu dostavu s isporukom od 7-10 radnih dana. Za narudžbe ispod 100HRK, dostava košta 20HRK.",
    "section": "Narudžbe i dostava",
    "locale": "hr",
    "icon": "TruckIcon"
  },
  {
    "question": "Kako isporučujete boce Jugsie?",
    "answer": "Jugsie boce isporučujemo u Hrvatsku s firmom GLS. Trenutno ne dostavljamo izvan Hrvatske, ali uskoro to planiramo promijeniti. ",
    "section": "Narudžbe i dostava",
    "locale": "hr",
    "icon": "TruckIcon"
  },
  {
    "question": "Dostavljate li Jugsie izvan Hrvatske?",
    "answer": "Nažalost, ne. Za sada Jugsie boce isporučujemo samo unutar Hrvatske, ali planiramo proširiti dostavu na Europu u kratkom periodu.",
    "section": "Narudžbe i dostava",
    "locale": "hr",
    "icon": "TruckIcon"
  },
  {
    "question": "Mogu li vratiti narudžbu?",
    "answer": "Da, svoju bočicu Jugsie možete vratiti u roku od 30 dana od kupnje.* Sve Jugsie boce pokrivene su proizvodnim nedostacima godinu dana nakon kupnje. Napominjemo da nam je za bilo kakav povratak / zamjenu potreban dokaz o kupnji.* Personalizirane (gravirane) i korištene bočice Jugsie ne mogu se vratiti zbog nemogućnosti ponovne prodaje. \\tSve dok Vaša Jugsie bočica nije korištena ili personalizirana, izdat ćemo puni povrat novca nakon što je predmet primljen u naše skladište. Napominjemo da troškove povrata mora pokriti kupac. \\tSve isporuke dolaze s naljepnicom s povratnom adresom. Jugsie se ne može smatrati odgovornim za bilo kakve povrate koji se izgube na pošti, zbog čega preporučujemo upotrebu usluge s potpisom kada nam šaljete povrat. \\tMolimo osigurajte da svi povrati stignu do nas u prodajnom stanju. Na primjer, nemojte lijepiti naljepnice na ambalažu.",
    "section": "Povrat",
    "locale": "hr",
    "icon": "ReceiptRefundIcon"
  },
  {
    "question": "Mogu li otkazati narudžbu?",
    "answer": "Nažalost, ne možemo jamčiti mogucnost otkazivanja Vaše narudžbe zbog toga što se velika većina narudžbi odmah priprema za isporuku, ali kontaktirajte nas na info@jugsie.com čim saznate da želite otkazati svoju narudžbu pa će možda biti prilike otkazati je. U slučaju da je moguće otkazati Vašu narudžbu, primit ćete puni povrat novca. Ukoliko to nije moguće, nekorištenu i nepersonaliziranu bocu možete vratiti kroz 30 dana. ",
    "section": "Returns",
    "locale": "hr",
    "icon": "ReceiptRefundIcon"
  },
  {
    "question": "Moja je narudžba stigla oštećena.",
    "answer": "Žao nam je što je Vaša narudžba stigla oštećena. Ako je proizvod oštećen u prijevozu, tada ćemo ga zamijeniti besplatno. Molimo vas da nam ne šaljete neispravne proizvode, već nas kontaktirajte što je prije moguće  na info@jugsie.com.",
    "section": "Povrat",
    "locale": "hr",
    "icon": "ReceiptRefundIcon"
  },
  {
    "question": "Što pokriva jamstvo?",
    "answer": "Jugsie boce dizajnirane su za upotrebu tijekom cijelog života. Međutim, ako nešto pođe po zlu, naše jamstvo pokriva Vas protiv proizvodnih nedostataka godinu dana od dana kupnje. Sve što trebate je dokaz o kupnji koji može potvrditi datum kupnje i osigurati autentičnost proizvoda. Kako Jugsie boce imaju za cilj smanjenje otpada, s ponosom možemo reći da nudimo odgovarajuće zamjene neispravnih dijelova Jugsie boca, umjesto da cijelu bocu zamijenimo novom. Ako ista boja nije dostupna, dat ćemo sve od sebe da Vam omogućimo sto sličniji dio originalnom. Znakovi korištenja, poput ogrebotina i udubljenja, nije pokriveno jamstvom. Također, šteta nastala nepravilnim čišćenjem ili preinakama od treće strane također nije uključena u naše jamstvo. ",
    "section": "Povrat",
    "locale": "hr",
    "icon": "ReceiptRefundIcon"
  },
  {

    "question": "Zahtjev pod jamstvom",
    "answer": "Ako mislite da je Vaš predmet neispravan, prvo nas kontaktirajte i rado ćemo ga pogledati. Opišite što nije u redu i priložite fotografiju svog predmeta. Neispravni proizvodi ispunjavaju uvjete za povrat novca do trideset dana nakon kupnje. Nakon toga zamjenu možemo ponuditi samo uz jamstvo. Molimo Vas imajte na umu da se jamstvo ne ponovno pokreće kada primite zamjensku bocu.",
    "section": "Povrat",
    "locale": "hr",
    "icon": "ReceiptRefundIcon"
  },
  {
    "question": "Proizvodi koji su stigli oštećeni",
    "answer": "Ako narudžba stigne oštećena, nemojte je koristiti jer će poništiti jamstvo. Molimo kontaktirajte nas sa slikama neispravne boce i rado ćemo je zamijeniti.",
    "section": "Povrat",
    "locale": "hr",
    "icon": "ReceiptRefundIcon"
  }
]

async function main() {
  for (const bottle of bottles) {
    await prisma.bottle.upsert({
      where: { colour: bottle.colour },
      update: {},
      create: bottle,
    })
  }
  for (const faq of faqs) {
    await prisma.faq.upsert({
      where: { question: faq.question },
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