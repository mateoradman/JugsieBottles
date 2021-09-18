import React from "react";
import {FaBars} from 'react-icons/fa'
import NavLogo, {
  MobileIcon,
  Nav,
  NavbarContainer, NavItem, NavLinks,
  NavMenu
} from "./NavbarElements";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          {/*<NavLogo>*/}
          {/*</NavLogo>*/}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="shop">Shop</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="faq">FAQ</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
