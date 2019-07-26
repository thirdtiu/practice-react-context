import React, {useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {ThemeContext} from '../ThemeContext';
import {withRouter} from 'react-router-dom';

const Header = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleSignOut = () => {
    // sign out codes
    //redirect to login
    props.history.push('/');
  }
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
        <Nav className="ml-auto">
          <NavDropdown alignRight title="Admin" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {props.history.push('/manage-account')}}
              >
              Manage Acount
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {props.history.push('/theme')}}
              >
              Theme Options
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header);