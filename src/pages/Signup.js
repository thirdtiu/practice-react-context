import React, {useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import SignupForm from '../components/SignupForm';
import {ThemeContext} from '../ThemeContext';

const Signup = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  return(
    <div 
      className="body-background"
      style={{
        backgroundColor: theme.bodyBackgroundColor
      }}
      >
        <Navbar 
          variant="dark" 
          expand="lg" 
          style={{
            backgroundColor: theme.headerBackgroundColor
          }}
          >
          <Navbar.Brand href="#home">CloaKey</Navbar.Brand>
        </Navbar>
        <h1 className="text-center mt-5">Create your account</h1>
      <Container 
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: theme.bodyBackgroundColor
        }}
        >
        <Col md={5}>
          <hr/>
          <SignupForm />
        </Col>
      </Container>
    </div>
  );
}

export default Signup;