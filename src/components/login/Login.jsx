// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'fev' && password === 'uniplot') {
      setAuth(true);
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div>
          <label className='username-label'>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='username-input'/>
        </div>
        <div>
          <label className='password-title'>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='password-input'/>
        </div>
        <button type="submit" className='submit-button'>Login</button>
      </form>
    </div>
  );
};

export default Login;
