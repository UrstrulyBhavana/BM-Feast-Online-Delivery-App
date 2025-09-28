import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const comingSoon = (label) => {
  const y = window.scrollY || window.pageYOffset;
  const lastActive = document.activeElement;

  return Swal.fire({
    title: label,
    text: 'This page is coming soon.',
    icon: 'info',
    confirmButtonText: 'Okay',
    confirmButtonColor: '#ff6347',
    scrollbarPadding: false,
    heightAuto: false,
    returnFocus: false,
  }).then(() => {
    window.scrollTo(0, y);
    if (lastActive && typeof lastActive.focus === 'function') {
      try { lastActive.focus({ preventScroll: true }); } catch { }
    }
  });
};

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-content-left">
            <Link to="/" onClick={scrollTop} aria-label="Go to home">
              <img src={assets.logo1} className="logo1" alt="MB Dine logo" />
            </Link>
            <p className="footer-desc">
              Welcome to MB-Restaurant, where every meal is a culinary journey. Enjoy fresh,
              locally sourced ingredients and innovative recipes in our cozy ambiance with
              exceptional service. Stay connected on social media and subscribe for exclusive
              updates and offers.
            </p>

            <div className="footer-social-icons" aria-label="Social links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={assets.facebook_icon} alt="facebook icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src={assets.twitter_icon} alt="twitter icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={assets.linkedin_icon} alt="linkedin icon" />
              </a>
            </div>
          </div>

          <nav className="footer-content-center" aria-label="Company">
            <h4>COMPANY</h4>
            <ul>
              <li><Link to="/" onClick={scrollTop}>Home</Link></li>
              <li><button type="button" className="link-like" onClick={() => comingSoon('About Us')}>About Us</button></li>
              <li><button type="button" className="link-like" onClick={() => comingSoon('Delivery')}>Delivery</button></li>
              <li><button type="button" className="link-like" onClick={() => comingSoon('Privacy Policy')}>Privacy Policy</button></li>
            </ul>
          </nav>

          <div className="footer-content-right" id="contact">
            <h4>STAY CONNECTED</h4>
            <p><a href="tel:+12124568956" className="footer-contact">+1-212-456-8956</a></p>
            <p><a href="mailto:contact@mb.com" className="footer-contact">contact@mb.com</a></p>
            <button type="button" className="to-top" onClick={scrollTop} aria-label="Back to top">
              ↑ Back to top
            </button>
          </div>
        </div>

        <hr className="footer-rule" />
        <p className="footer-copyright">© MB.com 2025 — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
