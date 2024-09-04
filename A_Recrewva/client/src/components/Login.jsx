import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);

        // Redirect based on user role
        if (response.data.role === 'recruiter') {
          navigate('/recruiter-dashboard');
        } else {
          navigate('/candidate-dashboard');
        }
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src="/hexware.png" alt="Hexaware Logo" className="hexaware-logo" />
        <form onSubmit={handleSubmit}>
          <h2>Recrewva Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="remember-me-container">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="error">{error}</p>}
          <a href="/register">Don't have an account? Sign up</a>
          <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
