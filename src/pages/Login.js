import React, {useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
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
      <Container 
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: theme.bodyBackgroundColor
        }}
        >
        <Col xs={6}>
          <Card
            style={{
              backgroundColor: theme.cardBackgroundColor
              }
            }
          >
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <LoginForm />
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default Login;