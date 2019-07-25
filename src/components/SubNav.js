import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import {withRouter} from 'react-router-dom';
import './SubNav.css';

const SubNav = (props) => {
  const [activeKey, setActiveKey] = useState('/home')
  return(
    <div className="nav-scroller bg-white shadow-sm">
      <Nav
        activeKey={activeKey}
        onSelect={selectedKey => {
          props.history.push(selectedKey)
          setActiveKey(selectedKey)
        }}
        className="nav-underline"
      >
        <Nav.Item>
          <Nav.Link href="/home">General</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Login Options</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/theme">Themes</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default withRouter(SubNav);