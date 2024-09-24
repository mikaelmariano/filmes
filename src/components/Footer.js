import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer className="footer">
        <div className="footer-up-left">
          <img src="/logoipsumbranco.svg" alt="Logo" className="logo-image" />
        </div>
        <div className="footer-line"></div>
        <div className="footer-down">
          <div className="footer-down-left">
            <div className="footer-termos">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="footer-down-right">
            <div className="footer-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                <img src="/twitter.png" alt="Twitter" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
