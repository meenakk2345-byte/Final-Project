import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="hotel-footer">
      
      {/* 1. TOP SECTION: OUR SERVICES CARDS */}
      <div className="services-section">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-grid">
          
          <div className="service-card">
            <span className="service-icon">🛎️</span>
            <div>
              <h4>Room Service</h4>
              <p>24x7 Room Service</p>
            </div>
          </div>

          <div className="service-card">
            <span className="service-icon">🧺</span>
            <div>
              <h4>Laundry</h4>
              <p>Laundry & Ironing</p>
            </div>
          </div>

          <div className="service-card">
            <span className="service-icon">💼</span>
            <div>
              <h4>Travel Desk</h4>
              <p>Travel Assistance</p>
            </div>
          </div>

          <div className="service-card">
            <span className="service-icon">🎧</span>
            <div>
              <h4>24x7 Support</h4>
              <p>We're Here to Help</p>
            </div>
          </div>

        </div>
      </div>

      {/* 2. BOTTOM SECTION: HORIZONTAL CONTACT INFO BAR */}
      <div className="contact-bar">
        <div className="contact-bar-container">
          
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div className="contact-text">
              <h4>Garhdiwala, Punjab, India</h4>
              <p>144521</p>
            </div>
          </div>

          <div className="contact-item border-left">
            <span className="contact-icon">📞</span>
            <div className="contact-text">
              <h4>+91 98765 43210</h4>
              <p>Mon - Sun (9 AM - 9 PM)</p>
            </div>
          </div>

          <div className="contact-item border-left">
            <span className="contact-icon">✉️</span>
            <div className="contact-text">
              <h4>hotelstay@gmail.com</h4>
              <p>We reply within 24 hours</p>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;