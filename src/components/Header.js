import React, {useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {ThemeContext} from '../ThemeContext';

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return(
    <Navbar 
      variant="dark" 
      expand="lg" 
      fixed="top"
      style={{
        backgroundColor: theme.headerBackgroundColor
      }}
      >
      <Navbar.Brand href="#home">CloaKey</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-5">
          <NavDropdown title="Admin" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Manage Acount</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Sign Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;