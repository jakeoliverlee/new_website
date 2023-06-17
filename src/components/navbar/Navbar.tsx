// Navbar.tsx
import React from 'react';
import { NavbarContainer, NavbarItem, NavbarTitle, NavbarItemsContainer, NavbarButton} from './styles.Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const Navbar: React.FC = () => {
    return (
      <NavbarContainer>
        <NavbarTitle>jakeoliverlee</NavbarTitle>
        <NavbarItemsContainer>
        <NavbarButton href="/resume.pdf" download>Download Resume</NavbarButton>
          <NavbarItem href="https://github.com/jakeoliverlee" target='__blank'>
            <FaGithub size={24} />
          </NavbarItem>
          <NavbarItem href="https://linkedin.com">
          <FaLinkedin size={24} />
        </NavbarItem>
        </NavbarItemsContainer>
      </NavbarContainer>
    );
  };
  
  export default Navbar;
