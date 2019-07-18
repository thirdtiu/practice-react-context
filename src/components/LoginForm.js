import React, {useState, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ThemeContext} from '../ThemeContext';
import {withRouter} from 'react-router-dom'


const LoginForm = (props) => {

  const [theme, setTheme] = useContext(ThemeContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('username & passwore: ', username, password)
    props.history.push('/admin')
  }

  const handleUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
  }
  return(
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>
          Username
        </Form.Label>
        <Form.Control type="text" placeholder="Username" onChange={handleUsernameInput} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>
          Password
        </Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordInput} />
      </Form.Group>

      <div className="text-right">
        <Button variant="default" type="button">
          Cancel
        </Button>
        <Button variant="primary" type="submit" onClick={handleLogin}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default withRouter(LoginForm);