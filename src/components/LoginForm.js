import React, {useState, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ThemeContext} from '../ThemeContext';
import {withRouter, Link} from 'react-router-dom'


const LoginForm = (props) => {

  const [theme, setTheme] = useContext(ThemeContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  }

  const handleUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
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
        <Form.Control.Feedback type="invalid">
          Please provide your username.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Control 
          required
          size="lg" 
          type="password" 
          placeholder="Password" 
          onChange={handlePasswordInput}
        />
        <Form.Control.Feedback type="invalid">
          Please provide your password.
        </Form.Control.Feedback>
      </Form.Group>

      <div>
        <Button className="mb-3" variant="primary" size="lg" block type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <p className="mb-1 text-right">New User? <Link to="/signup">Sign up here.</Link></p>
        <p className="text-right">Forgot Password?</p>
      </div>
    </Form>
  );
}

export default withRouter(LoginForm);