import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const location = useLocation(); 
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <a href="#" className="logo">
        <img src="/assets/logo.png" width="200px" height="110px" alt="Logo" />
      </a>
      <ul className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
        <li><Link to="/explore" onClick={closeMenu}>EXPLORE</Link></li>
        <li><Link to="/latest" onClick={closeMenu}>LATEST</Link></li>
        <li><Link to="/questionnaire" onClick={closeMenu}>QUESTIONNAIRE</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
        <li><Link to="/login" onClick={closeMenu}>LOGIN</Link></li>
      </ul>
      <div className="navtabs">
        <a href="#">Follow us</a>
        <a href="https://www.instagram.com/">
          <i className="ri-instagram-fill"></i>
        </a>
        <a href="https://x.com/">
          <i className="ri-twitter-x-fill"></i>
        </a>
        <a href="https://www.facebook.com/">
          <i className="ri-facebook-fill"></i>
        </a>
      <div
        className="bx bx-menu"
        id="menu"
        onClick={toggleMenu}
      ></div>
      </div>
    </header>
  );
};

export default Header;
