import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopNavigation from '../TopNavigation/TopNavigation';
import MainNavigation from '../MainNavigation/MainNavigation';
import Footer from '../Footer/Footer';
import './Register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: ''
  });
  const [error, setError] = useState('');

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

  return (
    <div className="register-page">
      <TopNavigation />
      <MainNavigation />
      
      <div className="register-wrapper">
        <div className="register-container">
          <div className="register-box">
            <div className="register-header">
              <h2>Sign up</h2>
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Enter your email</label>
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
                <label htmlFor="phone">Enter your phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  maxLength="10"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="dob">Enter your DOB</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="gender">Select Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="gender-select"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="terms-checkbox">
                  <input type="checkbox" required />
                  <span>By continuing, I agree to the <Link to="/terms">Terms & Conditions</Link> & <Link to="/privacy">Privacy Policy</Link>.</span>
                </label>
              </div>
              
              <button type="submit" className="btn-signup">
                Sign Up
              </button>
            </form>
            
            <div className="login-link">
              <p>Existing user? <Link to="/login">Sign in</Link></p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

