// Header.jsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFlyout = () => setFlyoutOpen(!flyoutOpen);
  const closeFlyout = () => setFlyoutOpen(false);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="logo"><img src="Murtazalogo.png" alt="" width="200px" /></div>

        <nav className="desktop-nav">
          <NavLink to="/" onClick={closeFlyout}>Home</NavLink>
          <NavLink to="/about" onClick={closeFlyout}>About</NavLink>
          <NavLink to="/services" onClick={closeFlyout}>Services</NavLink>
          <NavLink to="/portfolio" onClick={closeFlyout}>Portfolio</NavLink>
          <NavLink to="/contact" onClick={closeFlyout}>Contact</NavLink>
        </nav>

        <div className="hire-button-wrapper">
          <NavLink to="/contact" className="btn">Hire Me</NavLink>
        </div>

        <div className="menu-icon" onClick={toggleFlyout}>
          &#9776;
        </div>
      </div>

      <div className={`flyout-menu ${flyoutOpen ? 'open' : ''}`}>
        <span className="close-icon" onClick={closeFlyout}>&times;</span>
        <NavLink to="/" onClick={closeFlyout}>Home</NavLink>
        <NavLink to="/about" onClick={closeFlyout}>About</NavLink>
        <NavLink to="/services" onClick={closeFlyout}>Services</NavLink>
        <NavLink to="/portfolio" onClick={closeFlyout}>Portfolio</NavLink>
        <NavLink to="/contact" onClick={closeFlyout}>Contact</NavLink>
        <NavLink to="/contact" className="flyout-hire-btn" onClick={closeFlyout}>Hire Me</NavLink>
      </div>
    </header>
  );
};

export default Header;
