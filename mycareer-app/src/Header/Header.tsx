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
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #000000; 
  img {
    width: 100px; 
    height: auto;
    filter: invert(0);
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000000; 
  &:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export default function Header() {
  const handleLogo = () => {
    window.location.reload();
  };
  const handleContact=()=>{
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
  }
  const handlePortfolio=()=>{
    const portfolioSection=document.getElementById('portfolio')
    if(portfolioSection){
      portfolioSection.scrollIntoView({behavior:'smooth'})
    }
  }
  const handleSkills=()=>{
    const skillsSection=document.getElementById('skills')
    if(skillsSection){
      skillsSection.scrollIntoView({behavior:'smooth'})
    }
  }
  const handleAbout=()=>{
    const aboutSection=document.getElementById('About me')
    if(aboutSection){
      aboutSection.scrollIntoView({behavior:'smooth'})
    }
  }
  return (
    <Navbar>
      <Logo onClick={handleLogo}>
        <img src={logo} alt="Logo" />
      </Logo>
      <nav>
        <NavList>
          <NavItem>
            <NavLink href="#About me" onClick={handleAbout}>About me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills" onClick={handleSkills}>skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Portfolio" onClick={handlePortfolio}>Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" onClick={handleContact}>contact</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </Navbar>
  );
}
