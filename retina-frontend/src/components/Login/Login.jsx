import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopNavigation from '../TopNavigation/TopNavigation';
import MainNavigation from '../MainNavigation/MainNavigation';
import Footer from '../Footer/Footer';
import './Login.css';

export default function Login() {
  const [formData, setFormData] = useState({
    mobile: '',
    captcha: ''
  });
  const [error, setError] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');

  // Generate random captcha code
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // Initialize captcha on component mount
  useEffect(() => {
    setCaptchaCode(generateCaptcha());
  }, []);

  // Refresh captcha
  const handleRefreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setFormData({
      ...formData,
      captcha: '' // Clear the input field when refreshing
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    // Frontend only - no functionality
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    // Frontend only - no functionality
  };

  return (
    <div className="login-page">
      <TopNavigation />
      <MainNavigation />
      
      <div className="login-wrapper">
        <div className="login-container">
          <div className="login-box">
            <div className="login-header">
              <h2>Sign In</h2>
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="mobile">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  maxLength="10"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="captcha">Enter Captcha</label>
                <div className="captcha-wrapper">
                  <div className="captcha-image">
                    <div className="captcha-placeholder">
                      <span>{captchaCode}</span>
                    </div>
                    <button 
                      type="button" 
                      className="captcha-refresh" 
                      onClick={handleRefreshCaptcha}
                      title="Refresh Captcha"
                    >
                      🔄
                    </button>
                  </div>
                  <input
                    type="text"
                    id="captcha"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    placeholder="Enter captcha"
                    maxLength="6"
                    required
                  />
                </div>
              </div>
              
              <button type="submit" className="btn-signin">
                Sign In
              </button>
            </form>

            <div className="divider">
              <span>or</span>
            </div>

            <button type="button" className="btn-google-signin" onClick={handleGoogleSignIn}>
              <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
            
            <div className="register-link">
              <p>Don't have an account? <Link to="/register">Create Account</Link></p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

