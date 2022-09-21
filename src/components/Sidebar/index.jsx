import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu
} from "./style";

export function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
         <SidebarLink 
            to="/"
            onClick={toggle}
            spy={true} 
            smooth={true}
            offset={-80}
            duration={50}
          >
            Home
          </SidebarLink>
          <SidebarLink 
            to="about"
            onClick={toggle}
            spy={true} 
            smooth={true}
            offset={-80}
            duration={50}
          >
            Sobre
          </SidebarLink>
          <SidebarLink 
            to="project"
            onClick={toggle}
            spy={true} 
            smooth={true}
            offset={-80}
            duration={50}
          >
            Projeto
          </SidebarLink>
          <SidebarLink 
            to="contato"
            onClick={toggle}
            spy={true} 
            smooth={true}
            offset={-300}
            duration={50}
          >
            Contato
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}