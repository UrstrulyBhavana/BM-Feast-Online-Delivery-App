import React, { useState, useContext, useEffect } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login")
    const { setIsLoggedIn } = useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setShowLogin(false);
    };

    useEffect(() => {
        const scrollY = window.scrollY || window.pageYOffset;
       
        document.documentElement.style.overflow = 'hidden'; // lock <html>
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';

        return () => {

            document.documentElement.style.overflow = '';
            const y = Math.abs(parseInt(document.body.style.top || '0', 10)) || 0;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollY || y);
        };
    }, []);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setShowLogin(false); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [setShowLogin]);


    return (
        <div className='login-popup' onClick={(e) => { if (e.target.classList.contains('login-popup')) setShowLogin(false); }}>
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <button
                        type="button"
                        className="login-close"
                        aria-label="Close login dialog"
                        onClick={() => setShowLogin(false)}
                    >
                        <img src={assets.cross_icon} alt="cross-icon" aria-hidden="true" />
                    </button>

                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? null : <input type='text' placeholder='Enter Your Name...' required />}
                    <input type='email' placeholder='Enter Your Email...' required />
                    <input type='password' placeholder='Enter Your Password...' required />
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required />
                    <p>By continuing, I consent to the Terms and Conditions and Privacy Policy.</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new Account ? <span onClick={() => setCurrState("Sign Up")}>Click Here!..</span></p>
                    : <p>Already have an Account ? <span onClick={() => setCurrState("Login")}>Login Here!..</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup







