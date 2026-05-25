import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Typed from 'typed.js';
import Education from './Education.jsx';
import ServicesSection from './Servicessection.jsx';
import HomePortfolio from './HomePortfolio.jsx';
import CTA from './CTA.jsx';
import './Home.css';
import AboutSection from './AboutSection.jsx';

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Front-End Developer', 'WordPress Developer', 'Shopify Developer'],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1200,
      loop: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-page">
      <section className="home">
        <div className="home-hero-content">
          <span className="eyebrow">Modern Web Experiences, Built to Convert</span>
          <h1>
            Hi, I’m
            <span>Muhammad Murtaza</span>
          </h1>
          <h2>
            Creative <span className="multiple-text"></span>
          </h2>
          <p>
            I'm a versatile web developer specializing in WordPress, custom front-end development, and Shopify store creation. With a keen eye for design and user experience, I build websites that not only look stunning but also work seamlessly across all devices. My portfolio showcases a range of projects, from custom-built websites to tailored e-commerce solutions, all designed with precision and functionality in mind.
          </p>

          <div className="hero-actions">
            <NavLink to="/contact" className="btn hero-btn primary">Let’s build together</NavLink>
            <NavLink to="/Murtaza%27s%20CV.pdf" download="Murtaza's_CV" className="btn hero-btn secondary">Download Resume</NavLink>
          </div>

          <div className="hero-badges">
            <span>WordPress</span>
            <span>React.js</span>
            <span>Shopify</span>
            <span>Responsive UX</span>
          </div>

          <div className="social-media">
            <NavLink to="https://www.facebook.com/murtaza.webcreations" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-facebook"></i>
            </NavLink>
            <NavLink to="https://www.instagram.com/murtazawebcreations/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram-alt"></i>
            </NavLink>
            <NavLink to="https://www.behance.net/M_Murtaza" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-behance"></i>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/murtazawebcreations/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin"></i>
            </NavLink>
            <NavLink to="https://github.com/murtazawebcreations" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github"></i>
            </NavLink>
          </div>
        </div>

        <div className="home-hero-visual">
          <div className="glass-card">
            <div className="hero-card-ring"></div>
            <img src="/Murtaza.png" alt="Muhammad Murtaza" />
           
          </div>

          <div className="hero-floating-group">
            <div className="floating-panel panel-top">
              <h4>Smart UI Animations</h4>
              <p>Motion-driven layouts and interactive sections that feel premium.</p>
            </div>
            <div className="floating-panel panel-bottom">
              <h4>Performance Focus</h4>
              <p>Optimized builds for speed, accessibility, and smooth user journeys.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-gif-blocks">

  <article className="gif-card">
    <video
      src="/Modern-Web-Development.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>

    <h3>Modern Web Development</h3>

    <p>
      Building fast, scalable, and responsive websites using modern
      technologies like React and WordPress.
    </p>
  </article>

  <article className="gif-card">
    <video
      src="/Creative-ui.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>

    <h3>Creative UI/UX Design</h3>

    <p>
      Designing clean and engaging interfaces focused on user experience
      and modern visual aesthetics.
    </p>
  </article>

  <article className="gif-card">
    <video
      src="/Performance-Focused.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>

    <h3>Performance Focused</h3>

    <p>
      Optimized websites with smooth interactions, fast loading speeds,
      and mobile-first responsiveness.
    </p>
  </article>

</section>

      <AboutSection />
      <Education />
      <ServicesSection />
      <HomePortfolio />
      <CTA />
    </div>
  );
};

export default Home;

