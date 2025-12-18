import React from 'react';
import './Header.css';
import logo from '/logo.svg';

const Header = () => {
  return (
    <header className="site-header">
      <nav className="main-nav">
        <a href="#" className="logo">
          <img src={logo} alt="CloudCrew Solutions Logo" className="company-logo" />
        </a>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#the-cloudcrew-advantage">The CloudCrew Advantage</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
