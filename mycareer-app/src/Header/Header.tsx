import styled from 'styled-components';
import logo from '../img/Logo.jpg';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0; /* Set your preferred light background color here */
  border-top: 2px solid #000000; /* Set your preferred light border color here */
  border-bottom: 2px solid #000000; /* Set your preferred light border color here */
  border-radius: 5px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #000000; /* Set your preferred light text color here */
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
  color: #000000; /* Set your preferred light text color here */
  &:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export default function Header({ onThemeChange }: any) {
  const handleThemeChange = (event: any) => {
    const selectedTheme = event.target.value;
    onThemeChange(selectedTheme);
  };

  const handleLogo = () => {
    window.location.reload();
  };

  return (
    <Navbar>
      <Logo onClick={handleLogo}>
        <img src={logo} alt="Logo" />
      </Logo>
      <nav>
        <NavList>
          <NavItem>
            <NavLink href="#project">About me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills">skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Portfolio</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </Navbar>
  );
}
