import React, {useState, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ThemeContext} from '../ThemeContext';
import {withRouter} from 'react-router-dom'


const SignupForm = (props) => {

  const [theme, setTheme] = useContext(ThemeContext);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const [validated, setValidated] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('username & passwore: ', username, email, password, confirmPassword)
    props.history.push('/admin')
  }

  const handleUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordInput = (e) => {
    setConfirmPassword(e.target.value)
  }
  
  const handleCancel = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    props.history.push('/')
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  }
  return(
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Control 
          required
          size="lg" 
          type="text" 
          placeholder="Username" 
          onChange={handleUsernameInput}
        />
        <Form.Control.Feedback type="invalid">Username is required.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Control 
          required
          size="lg" 
          type="text" 
          placeholder="Email Address" 
          onChange={handleEmailInput} 
        />
        <Form.Control.Feedback type="invalid">Email is required.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Control
          required
          size="lg" 
          type="password" 
          placeholder="Password" 
          onChange={handlePasswordInput} 
        />
        <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Control 
          required
          size="lg" 
          type="password" 
          placeholder="Confirm Password" 
          onChange={handleConfirmPasswordInput}
        />
        <Form.Control.Feedback type="invalid">Confirm Password is required.</Form.Control.Feedback>
      </Form.Group>

      <div className="text-right">
        <Button size="lg" variant="default" type="button" onClick={handleCancel}>
          Cancel
        </Button>
        <Button size="lg" variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default withRouter(SignupForm);