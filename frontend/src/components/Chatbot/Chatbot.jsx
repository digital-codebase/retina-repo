import React, { useState, useEffect } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show chatbot after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {!isOpen ? (
        <button 
          className="chatbot-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          💬
        </button>
      ) : (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chat with us</h3>
            <button 
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            <div className="chatbot-message bot">
              <p>Hello! How can we help you today?</p>
            </div>
          </div>
          <div className="chatbot-input-area">
            <input 
              type="text" 
              placeholder="Type your message..."
              className="chatbot-input"
            />
            <button className="chatbot-send">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

