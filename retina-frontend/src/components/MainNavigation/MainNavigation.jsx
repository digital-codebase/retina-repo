import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const accountDropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchWrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
        setIsAccountDropdownOpen(false);
      }
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target) && 
          !event.target.closest('.main-nav__search-toggle')) {
        setIsSearchOpen(false);
      }
    };

    if (isAccountDropdownOpen || isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAccountDropdownOpen, isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleAccountToggle = () => {
    setIsAccountDropdownOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInputRef.current) {
      const searchTerm = searchInputRef.current.value.trim();
      if (searchTerm) {
        // Add your search functionality here
        console.log('Searching for:', searchTerm);
        // Example: You could navigate to a search results page or filter content
        // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
      }
    }
  };

  return (
    <header className="main-nav">
      <div className="main-nav__inner">
        <div className="main-nav__brand">
          <Link to="/" className="main-nav__logo">
            Retina
          </Link>
        </div>

        <nav className={`main-nav__menu ${isMenuOpen ? 'is-open' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); handleLinkClick(); }}>
            Home
          </a>
          <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); handleLinkClick(); }}>
            Products
          </a>
          <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); handleLinkClick(); }}>
            Solutions
          </a>
          <a href="#support" onClick={(e) => { e.preventDefault(); scrollToSection('support'); handleLinkClick(); }}>
            Support
          </a>
          <a href="#contact-us" onClick={(e) => { e.preventDefault(); scrollToSection('contact-us'); handleLinkClick(); }}>
            Contact Us
          </a>
          <div className="main-nav__search-container">
            <button 
              className="main-nav__search-toggle"
              type="button"
              aria-label="Toggle search"
              onClick={handleSearchToggle}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {isSearchOpen && (
              <div className="main-nav__search-wrapper" ref={searchWrapperRef}>
                <div className="main-nav__search-separator"></div>
                <div className="main-nav__search">
                  <input 
                    ref={searchInputRef}
                    type="search" 
                    placeholder="Search" 
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch(e);
                      }
                      if (e.key === 'Escape') {
                        setIsSearchOpen(false);
                      }
                    }}
                  />
                  <button type="button" aria-label="Search" onClick={handleSearch}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="main-nav__actions">
          <div className="main-nav__account-wrapper" ref={accountDropdownRef}>
            <button 
              className={`main-nav__account-trigger ${isAccountDropdownOpen ? 'is-open' : ''}`}
              onClick={handleAccountToggle}
              aria-expanded={isAccountDropdownOpen}
              aria-haspopup="true"
            >
              Account
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L1 4H11L6 9Z" fill="currentColor"/>
              </svg>
            </button>
            {isAccountDropdownOpen && (
              <div className="main-nav__account-dropdown">
                <Link to="/login" className="main-nav__dropdown-item" onClick={() => setIsAccountDropdownOpen(false)}>
                  Login
                </Link>
                <Link to="/register" className="main-nav__dropdown-item" onClick={() => setIsAccountDropdownOpen(false)}>
                  Register
                </Link>
              </div>
            )}
          </div>
          <span className="main-nav__separator" />
          <a href="#cart" className="main-nav__cart-icon" aria-label="Shopping Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18C5.9 18 5.01 18.9 5.01 20S5.9 22 7 22 8.99 21.1 8.99 20 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20S15.9 22 17 22 18.99 21.1 18.99 20 18.1 18 17 18Z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        <button
          className="main-nav__toggle"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={handleToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

