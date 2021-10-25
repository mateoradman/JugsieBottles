import Link from "next/link";

const navigation = [
  {name: 'HOME', href: '/'},
  {name: 'SHOP', href: '/shop'},
  {name: 'KONTAKT', href: '/contact'},
  {name: 'FAQ', href: '/faq'},
]

const NavbarLinks = (props) => {
  return (
    <div className={props.divStyling}>
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
            key={item.name}
            className={props.buttonStyling}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  );
}

export default NavbarLinks;