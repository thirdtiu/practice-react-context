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
  return(
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Control size="lg" type="text" placeholder="Username" onChange={handleUsernameInput} />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Control size="lg" type="text" placeholder="Email Address" onChange={handleEmailInput} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Control size="lg" type="password" placeholder="Password" onChange={handlePasswordInput} />
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Control size="lg" type="password" placeholder="Confirm Password" onChange={handleConfirmPasswordInput} />
      </Form.Group>

      <div className="text-right">
        <Button size="lg" variant="default" type="button" onClick={handleCancel}>
          Cancel
        </Button>
        <Button size="lg" variant="primary" type="submit" onClick={handleLogin}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default withRouter(SignupForm);