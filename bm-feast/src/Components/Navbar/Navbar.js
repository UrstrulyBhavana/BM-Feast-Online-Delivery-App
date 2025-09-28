import React, { useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export default function Navbar({ setShowLogin }) {
  const { getTotalCartAmount, isLoggedIn, setIsLoggedIn } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();

  const getHeaderOffset = () =>
    (document.querySelector('.navbar')?.offsetHeight || 0) + 8;

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset();
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };

  const jumpTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToId(id), 100); // give Home a tick to mount
    } else {
      scrollToId(id);
    }
  };

  return (
    <div className="navbar" role="navigation">
      <Link to="/" aria-label="Home">
        <img src={assets.logo1} alt="MB logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
        </li>
        <li><button type="button" className="linklike" onClick={() => jumpTo('explore-menu')}>Menu</button></li>
        <li><button type="button" className="linklike" onClick={() => jumpTo('app-download')}>Mobile-App</button></li>
        <li><button type="button" className="linklike" onClick={() => jumpTo('footer')}>Contact Us</button></li>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="cart" /></Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>

        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)} className="logout-btn">Logout</button>
        ) : (
          <button onClick={() => setShowLogin(true)} className="signin-btn">Sign In</button>
        )}
      </div>
    </div>
  );
}
