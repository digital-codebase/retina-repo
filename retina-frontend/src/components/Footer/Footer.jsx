import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Retina</h3>
            <p>Your trusted partner for CCTV, vending machines, and security solutions. We provide comprehensive security services to protect what matters most.</p>
            
	     <div className="social-links flex gap-4">
               <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
               <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
               <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
               <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
             </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#install">CCTV Installation Service</a></li>
              <li><a href="#maintain">CCTV Maintenace Service</a></li>
              <li><a href="#consult">CCTV Consultation Service</a></li>
              <li><a href="#rm">Remote Monitoring Service</a></li>
              <li><a href="#dl">DigitalLock Service</a></li>


              

            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>📍 123 Security Street, City, Country</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@retina.com</li>
              
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Retina. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

