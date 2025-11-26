import React, { useState } from 'react';
import './Footer.css';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp, MessageCircle, Rocket } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      {/* CTA Section */}
      <div className="footer-cta">
        <div className="footer-cta__content">
          <h2 className="footer-cta__title">Ready to get started?</h2>
          <p className="footer-cta__description">
            Experience the Security, Reliability and Protection your business deserves or let us answer all your questions and help you choose the best solution for you!
          </p>
          <div className="footer-cta__buttons">
            <a href="#pricing" className="footer-cta__button footer-cta__button--primary">
              Plans & Pricing
              <Rocket size={16} />
            </a>
            <a href="#contact-us" className="footer-cta__button footer-cta__button--secondary">
              Chat With Sales
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Column - Brand & Newsletter */}
          <div className="footer-section footer-section--brand">
            <div className="footer-logo">
              <h3>RETINA</h3>
              <p className="footer-tagline">SECURITY • RELIABILITY • PROTECTION</p>
            </div>
            <p className="footer-description">
              Retina will enhance your security infrastructure with uniquely optimized and stable CCTV and security solutions at an affordable price.
            </p>
            
            {/* Stay Tuned Section */}
            <div className="footer-newsletter">
              <h4 className="footer-newsletter__title">STAY TUNED</h4>
              <p className="footer-newsletter__description">
                Receive news, offers, security tips, tricks and other useful materials!
              </p>
              <form className="footer-newsletter__form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="E-Mail Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-newsletter__input"
                  required
                />
                <button type="submit" className="footer-newsletter__button">
                  SUBSCRIBE
                </button>
              </form>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
              </div>
            </div>
          </div>

          {/* Middle Columns - Navigation Links */}
          <div className="footer-section">
            <h4>SECURITY SERVICES</h4>
            <ul>
              <li><a href="#we-offer" onClick={(e) => { e.preventDefault(); document.getElementById('we-offer')?.scrollIntoView({ behavior: 'smooth' }); }}>CCTV Installation Service</a></li>
              <li><a href="#we-offer" onClick={(e) => { e.preventDefault(); document.getElementById('we-offer')?.scrollIntoView({ behavior: 'smooth' }); }}>CCTV Maintenance Service</a></li>
              <li><a href="#we-offer" onClick={(e) => { e.preventDefault(); document.getElementById('we-offer')?.scrollIntoView({ behavior: 'smooth' }); }}>CCTV Consultation Service</a></li>
              <li><a href="#we-offer" onClick={(e) => { e.preventDefault(); document.getElementById('we-offer')?.scrollIntoView({ behavior: 'smooth' }); }}>Remote Monitoring Service</a></li>
              <li><a href="#we-offer" onClick={(e) => { e.preventDefault(); document.getElementById('we-offer')?.scrollIntoView({ behavior: 'smooth' }); }}>Digital Lock Service</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>ABOUT RETINA</h4>
            <ul>
              <li><a href="#about">About Retina</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
              <li><a href="#press">Case Studies</a></li>
              <li><a href="#happy-customers">Reviews & Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>LEARN & GET HELP</h4>
            <ul>
              <li><a href="#support">Technical Support</a></li>
              <li><a href="#contact-us">Contact Sales</a></li>
              <li><a href="#faq">Knowledge Base</a></li>
              <li><a href="#solutions">Solutions Guide</a></li>
              <li><a href="#products">Product Catalog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom__left">
            <p>&copy; {new Date().getFullYear()} Retina. All Rights Reserved.</p>
          </div>
          <div className="footer-bottom__right">
            <span className="footer-payments-label">Payments We Accept</span>
            <div className="footer-payment-icons">
              <span className="footer-payment-icon">PayPal</span>
              <span className="footer-payment-icon">VISA</span>
              <span className="footer-payment-icon">Mastercard</span>
            </div>
          </div>
          <button className="footer-scroll-top" onClick={handleScrollToTop} aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

    </footer>
  );
}

