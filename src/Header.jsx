// Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [flyoutOpen, setFlyoutOpen] = useState(false);

  const toggleFlyout = () => setFlyoutOpen(!flyoutOpen);
  const closeFlyout = () => setFlyoutOpen(false);

  return (
    <header className="main-header">
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
      </div>
    </header>
  );
};

export default Header;
