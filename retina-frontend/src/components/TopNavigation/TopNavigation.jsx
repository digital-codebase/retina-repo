import React from 'react';
import './TopNavigation.css';

export default function TopNavigation() {
  return (
    <div className="top-navigation">
      <div className="top-nav-container">
        <div className="top-nav-left">
        
        </div>
        <div className="top-nav-right">
        <a href="#about" className="top-nav-link">About Us</a>
          <a href="#live-chat" className="top-nav-link">Live Chat</a>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="top-nav-link whatsapp-link"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

