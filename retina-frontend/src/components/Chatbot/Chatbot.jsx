import React, { useState, useEffect } from 'react';
import './Chatbot.css';

export default function Chatbot({ externalOpen, onOpenChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show chatbot after scrolling down 300px or if externally opened
      if (window.scrollY > 300 || externalOpen) {
        setIsVisible(true);
      } else {
        // Only hide if not externally opened
        if (!externalOpen) {
          setIsVisible(false);
          setIsOpen(false);
        }
      }
    };

    // Check initial scroll position or external open
    if (window.scrollY > 300 || externalOpen) {
      setIsVisible(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [externalOpen]);

  // Handle external open trigger
  useEffect(() => {
    if (externalOpen) {
      setIsVisible(true);
      setIsOpen(true);
    }
  }, [externalOpen]);

  if (!isVisible && !externalOpen) return null;

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {!isOpen ? (
        <button 
          className="chatbot-button"
          onClick={() => {
            setIsOpen(true);
            if (onOpenChange) {
              onOpenChange(true);
            }
          }}
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
              onClick={() => {
                setIsOpen(false);
                if (onOpenChange) {
                  onOpenChange(false);
                }
              }}
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

