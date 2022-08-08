import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  ImgLogo,
} from "./NavBarElement";
import logo from '../../img/logo.svg'
import { FaBars } from "react-icons/fa";


function NavBar({toggle}) {
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          {/* <NavLogo  to="discover">  */}
          <ImgLogo to="/"  src={logo}  />
           {/* </NavLogo> */}
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="contact">Contact Us</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
