import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../img/Logo.jpg';


const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  border-radius: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #000000;
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: auto;
    filter: invert(0);
  }
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    margin-left: 95%;
    margin-top: 5%;
    margin-right: 5%;
    display: block; 
  }
`;

const NavList = styled.ul<{menuopen:boolean}>`
  display: ${({ menuopen }) => (menuopen ? 'flex' : 'none')};
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 769px) {
    flex-direction: row;
    display: flex;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin-left: 20px;
  margin-top: 10px;

  @media (min-width: 769px) {
    margin-left: 0;
    margin-top: 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000000;
  padding: 10px;

  &:hover {
    background-color: #f0f0f0;
    border-radius: 5px;
  }
`;

export default function Header() {
  const [menuopen, setmenuopen] = useState(false);
  const handleLogo=()=>{
    window.location.reload();
  }

  const handleMenuToggle = () => {
    console.log(menuopen);
    setmenuopen(!menuopen);
  };

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAbout = () => {
    const aboutSection = document.getElementById('About me');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar>
      <Logo onClick={handleLogo}>
        <img src={logo} alt="Logo" />
      </Logo>
      <HamburgerIcon onClick={handleMenuToggle}>☰</HamburgerIcon>
      <NavList menuopen={menuopen}>
        <NavItem>
          <NavLink href="#About me" onClick={handleAbout}>
            About me
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills" onClick={handleSkills}>
            skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#Portfolio" onClick={handlePortfolio}>
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact" onClick={handleContact}>
            contact
          </NavLink>
        </NavItem>
      </NavList>
    </Navbar>
  );
}
