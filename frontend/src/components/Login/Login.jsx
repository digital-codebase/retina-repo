import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopNavigation from '../TopNavigation/TopNavigation';
import MainNavigation from '../MainNavigation/MainNavigation';
import Footer from '../Footer/Footer';
import './Login.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // TODO: Implement actual login logic
    console.log('Login attempt:', formData);
    
    // Simulate login success
    alert('Login functionality will be implemented with backend integration');
    // navigate('/');
  };

  return (
    <div className="login-page">
      <TopNavigation />
      <MainNavigation />
      
      <div className="login-container">
        <div className="login-box">
          <h2>Login to Your Account</h2>
          <p className="login-subtitle">Welcome back! Please login to your account.</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
            
            <button type="submit" className="btn-login">
              Login
            </button>
            
            <div className="register-link">
              <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

