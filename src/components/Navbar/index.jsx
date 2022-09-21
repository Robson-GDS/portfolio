import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu
} from "./style";

export function Navbar({ toggle }) {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo 
          to="/"
          spy={true} 
          smooth={true}
          offset={-80}
          duration={50}
        > Robson</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks 
              to="/"
              spy={true} 
              smooth={true}
              offset={-80}
              duration={50}
            >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="about"
              spy={true} 
              smooth={true}
              offset={-80}
              duration={50}
            >
              Sobre
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="project"
              spy={true} 
              smooth={true}
              offset={-80}
              duration={50}
            >
              Projetos
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="sobre"
              spy={true} 
              smooth={true}
              offset={-80}
              duration={50}
            >
              Skill
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}