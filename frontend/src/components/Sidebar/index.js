import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer, SidebarLink, SidebarMenu,
  SidebarWrapper
} from "./SidebarElements";


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="faq" onClick={toggle}>
            FAQ
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;