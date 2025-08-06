import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo1} className='logo1' alt='logo1' />
                    <p>Welcome to MB-Restaurant, where every meal is a culinary journey. Enjoy fresh, locally sourced ingredients and innovative recipes in our cozy ambiance with exceptional service. Stay connected on social media and subscribe for exclusive updates and offers. Thank you for choosing MB-Restaurant for your exquisite dining experiences.</p>
                </div>

                <div className='footer-content-center'>
                    <h4>COMPANY</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/delivery">Delivery</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>


                <div className='footer-content-right'>
                    <h4>STAY CONNECTED</h4>
                    <p><a href="tel:+12124568956">+1-212-456-8956</a></p>
                    <p><a href="mailto:contact@mb.com">contact@mb.com</a></p>
                </div>

                <div className="footer-social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={assets.facebook_icon} alt="facebook-icon" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={assets.twitter_icon} alt="twitter-icon" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkedin_icon} alt="linkedin-icon" />
                    </a>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>  &copy; MB.com 2025 - All Rights Reserved.</p>
        </div>
    )
}

export default Footer