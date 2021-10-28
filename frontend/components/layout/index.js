import Navbar from "../navigation";
import Footer from "../footer";

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}