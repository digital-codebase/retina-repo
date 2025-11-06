import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MainNavigation.css';

export default function MainNavigation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Search:', searchQuery);
  };

  return (
    <nav className="main-navigation">
      <div className="main-nav-container">
        <div className="nav-left">
          <Link to="/" className="logo">
            <h2>Retina</h2>
          </Link>
        </div>

        <div className="nav-center">
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#training">Training</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="nav-right">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <span>🔍</span>
            </button>
          </form>

          <div className="nav-actions">
            <Link to="/cart" className="cart-link">
              <span>🛒</span>
              <span className="cart-text">Cart</span>
            </Link>

            <div 
              className="account-dropdown"
              onMouseEnter={() => setShowAccountMenu(true)}
              onMouseLeave={() => setShowAccountMenu(false)}
            >
              <button className="account-button">
                <span>👤</span>
                <span>Account</span>
              </button>
              {showAccountMenu && (
                <div className="account-menu">
                  <Link to="/login" onClick={() => setShowAccountMenu(false)}>Login</Link>
                  <Link to="/register" onClick={() => setShowAccountMenu(false)}>Register</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

