import React, {useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import LoginForm from '../components/LoginForm';
import {ThemeContext} from '../ThemeContext';
import './Login.css';

const Login = (props) => {
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
      
      <h1 className="text-center mt-5">Login to your account</h1>
      <Container 
        className="d-flex justify-content-center"
        style={{
          backgroundColor: theme.bodyBackgroundColor
        }}
        >
        <Col md={5}>
          <hr />
          <LoginForm />
            
        </Col>
      </Container>
    </div>
  );
}

export default Login;