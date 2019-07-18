import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './SubNav.css';

const SubNav = () => {
  return(
    <div className="nav-scroller bg-white shadow-sm">
      <Nav
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        className="nav-underline"
      >
        <Nav.Item>
          <Nav.Link href="/home">General</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Login Options</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Themes</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default SubNav;