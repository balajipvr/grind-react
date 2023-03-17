import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Authservice from '../Authservice';
import axios from 'axios';

const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const history = useHistory();
  
  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle login logic here
    console.log(`Username: ${email}, Password: ${password}`);

    const login_data = await Authservice.login(email,password)
    if (login_data == "Success") {
        console.log("Happy")
        setLoginMessage('Login successful');
        history.push('/home');
      }
    else {
        setLoginMessage('Invalid username or password');
      }

    // fetch('/validate', {
    //   method: 'GET',
    //   headers
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data.message)
    //   if (data.message == 'Valid User') {
    //     setLoginMessage('Login successful');
    //     history.push('/home');

    //   } else {
    //     setLoginMessage('Invalid username or password');
    //   }
    // })
    // .catch(error => console.error(error));
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={email} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {loginMessage && <p>{loginMessage}</p>}
    </div>
    )
}

export default Login;