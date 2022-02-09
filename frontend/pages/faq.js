import { FAQTab } from "../components/faq/FAQTab";

export default function FAQPage() {
  return (
    <div className="container mx-auto">
      <h1 className="prose-lg sm:prose-xl text-center font-extrabold mb-4 md:mb-6">Frequent Questions and Answers</h1>
      <FAQTab />
    </div>
  )
}
