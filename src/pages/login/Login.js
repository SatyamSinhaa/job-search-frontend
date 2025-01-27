import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import illustration from '../../assets/undraw_remotely_2j6y.svg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/users/login/${email}/${password}`);
      const userData = response.data;
      localStorage.setItem('userId', JSON.stringify(userData.userId));
      navigate('/jobs');
    }
    catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-left">
        <img src={illustration} alt="Illustration" />
      </div>
      <div className="signin-right">
        <h2>Sign In</h2>
        <p>Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
        <form onSubmit={handleLogin} className="signin-form">
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Username" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
          <div className="signin-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password">Forgot Password</a>
          </div>
          <button type="submit">Log In</button>
        </form>

      </div>
    </div>
  );
};

export default Login;