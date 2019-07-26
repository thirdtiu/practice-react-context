import React, {useState, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ThemeContext} from '../ThemeContext';
import {withRouter, Link} from 'react-router-dom'


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
        <Form.Control size="lg" type="text" placeholder="Username" onChange={handleUsernameInput} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Control size="lg" type="password" placeholder="Password" onChange={handlePasswordInput} />
      </Form.Group>

      <div>
        <Button className="mb-3" variant="primary" size="lg" block type="submit" onClick={handleLogin}>
          Submit
        </Button>
        <p className="mb-1 text-right">New User? <Link to="/signup">Signup here.</Link></p>
        <p className="text-right">Forgot Password?</p>
      </div>
    </Form>
  );
}

export default withRouter(LoginForm);