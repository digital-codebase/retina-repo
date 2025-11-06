import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation';
import MainNavigation from '../MainNavigation/MainNavigation';
import Footer from '../Footer/Footer';
import Chatbot from '../Chatbot/Chatbot';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="homepage">
      <TopNavigation />
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Retina</h1>
          <p>Your trusted partner for CCTV, vending machines, and security solutions</p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <a href="#solutions" className="btn btn-secondary">Our Solutions</a>
          </div>
        </div>
      </section>

      {/* We Offer Section */}
      <section id="we-offer" className="section we-offer-section">
        <div className="container">
          <h2 className="section-title">We Offer</h2>
          <div className="offer-grid">
            <div className="offer-card">
              <div className="offer-icon">📹</div>
              <h3>CCTV Systems</h3>
              <p>Advanced surveillance solutions for your security needs</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">🛒</div>
              <h3>Vending Machines</h3>
              <p>Smart vending solutions for modern businesses</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">🔒</div>
              <h3>Security Services</h3>
              <p>Comprehensive security solutions tailored to your needs</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">💡</div>
              <h3>Consultation</h3>
              <p>Expert advice and support for all your security requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Items Section */}
      <section id="trending" className="section trending-section">
        <div className="container">
          <h2 className="section-title">Trending Items</h2>
          <div className="trending-grid">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="trending-card">
                <div className="trending-image">
                  <img src={`https://via.placeholder.com/300x200?text=Product+${item}`} alt={`Trending ${item}`} />
                </div>
                <div className="trending-content">
                  <h3>Trending Product {item}</h3>
                  <p className="trending-price">$299.99</p>
                  <button className="btn btn-small">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="products" className="section products-section">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="products-grid">
            {['Network Cameras', '4G/5G Cameras', 'HD Recorders', 'Access Control', 'Alarm Systems', 'Storage Solutions'].map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={`https://via.placeholder.com/250x200?text=${encodeURIComponent(product)}`} alt={product} />
                </div>
                <div className="product-content">
                  <h3>{product}</h3>
                  <p>High-quality security solutions</p>
                  <button className="btn btn-outline">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Options Section */}
      <section id="solutions" className="section solutions-section">
        <div className="container">
          <h2 className="section-title">Solution Options</h2>
          <div className="solutions-grid">
            <div className="solution-item">
              <h3>Residential Solutions</h3>
              <p>Complete home security systems</p>
            </div>
            <div className="solution-item">
              <h3>Commercial Solutions</h3>
              <p>Business security infrastructure</p>
            </div>
            <div className="solution-item">
              <h3>Industrial Solutions</h3>
              <p>Enterprise-grade security systems</p>
            </div>
            <div className="solution-item">
              <h3>Custom Solutions</h3>
              <p>Tailored security packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section id="customers" className="section customers-section">
        <div className="container">
          <h2 className="section-title">Happy Customers</h2>
          <div className="customers-grid">
            {[1, 2, 3, 4].map((customer) => (
              <div key={customer} className="customer-card">
                <div className="customer-avatar">👤</div>
                <div className="customer-rating">⭐⭐⭐⭐⭐</div>
                <p className="customer-review">"Excellent service and quality products. Highly recommended!"</p>
                <p className="customer-name">- Customer {customer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Print and Press Section */}
      <section id="press" className="section press-section">
        <div className="container">
          <h2 className="section-title">Print and Press</h2>
          <div className="press-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="press-card">
                <div className="press-image">
                  <img src={`https://via.placeholder.com/400x250?text=Press+Article+${item}`} alt={`Press ${item}`} />
                </div>
                <h3>Latest News Article {item}</h3>
                <p>Stay updated with our latest news and press releases</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section id="stay-updated" className="section stay-updated-section">
        <div className="container">
          <div className="stay-updated-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest updates and offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}

