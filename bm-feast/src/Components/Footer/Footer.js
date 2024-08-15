import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo1} className='logo1'/>
                    <p>Welcome to MB-Restaurant, where every meal is a culinary journey. Enjoy fresh, locally sourced ingredients and innovative recipes in our cozy ambiance with exceptional service. Stay connected on social media and subscribe for exclusive updates and offers. Thank you for choosing MB-Restaurant for your exquisite dining experiences.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} />
                        <img src={assets.twitter_icon} />
                        <img src={assets.linkedin_icon} />
                    </div>
                </div>

                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className='footer-content-right'>
                    <h2>STAY IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-8956</li>
                        <li>contact@mb.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>Copyright 2024  &copy; MB.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer