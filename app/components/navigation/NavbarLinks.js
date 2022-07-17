import { useRouter } from "next/router";
import Link from "next/link";

const navigation_hr = [
  { name: "POČETNA", href: "/" },
  { name: "SHOP", href: "/shop" },
  { name: "KONTAKT", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];
const navigation_en = [
  { name: "HOME", href: "/" },
  { name: "SHOP", href: "/shop" },
  { name: "CONTACT", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];
const NavbarLinks = (props) => {
  const { locale } = useRouter();
  const navigation = locale == "en" ? navigation_en : navigation_hr;
  return (
    <div className={props.divStyling}>
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a key={item.name} className={props.buttonStyling}>
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavbarLinks;
