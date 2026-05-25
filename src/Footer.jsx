import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const footer = footerRef.current;
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        footer.classList.add('footer-visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check in case already in view
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer-modern" ref={footerRef}>
      <div className="footer-modern-container">
        <div className="footer-modern-grid">
          <div className="footer-modern-section about">
            <h3>Muhammad Murtaza</h3>
            <p>
              I’m a versatile web developer specializing in WordPress, front-end
              development, and Shopify. My goal is to deliver beautiful and functional websites across all devices.
            </p>
          </div>
          <div className="footer-modern-section links">
            <h3>Quick Links</h3>
            <ul className="footer-modern-links">
              <li><span className="footer-modern-link-icon"><i className="bx bx-home"></i></span><NavLink to="/">Home</NavLink></li>
              <li><span className="footer-modern-link-icon"><i className="bx bx-briefcase"></i></span><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><span className="footer-modern-link-icon"><i className="bx bx-rocket"></i></span><NavLink to="/services">Services</NavLink></li>
              <li><span className="footer-modern-link-icon"><i className="bx bx-phone"></i></span><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className="footer-modern-section contact">
            <h3>Contact Info</h3>
            <p><i className="bx bx-envelope"></i><a href="mailto:murtazawebcreations@email.com">  murtazawebcreations@gmail.com</a></p>
            <p><i className="bx bx-phone"></i><a href="tel:+923164667703"> +923164667703</a></p>
            <p><i className="bx bx-map"></i> <a href="https://maps.app.goo.gl/tadZ5UUSRAisps9FA" target="_blank" rel="noopener noreferrer">Lahore, Pakistan</a></p>
          </div>
          <div className="footer-modern-section social">
            <h3>Follow Me</h3>
            <div className="footer-modern-social-media">
              <NavLink to="https://www.facebook.com/murtaza.webcreations"  target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bx bxl-facebook"></i></NavLink>
              <NavLink to="https://www.instagram.com/murtazawebcreations/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bx bxl-instagram"></i></NavLink>
              <NavLink to="https://www.behance.net/M_Murtaza" target="_blank" rel="noopener noreferrer" aria-label="behance"><i className="bx bxl-behance"></i></NavLink>
              <NavLink to="https://www.linkedin.com/in/murtazawebcreations/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></NavLink>
              <NavLink to="https://github.com/murtazawebcreations" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="bx bxl-github"></i></NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-modern-bottom">
        <p>Copyright © 2026 Muhammad Murtaza. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;