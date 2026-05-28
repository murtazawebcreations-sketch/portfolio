import React from 'react';
import './About.css';
import { NavLink } from 'react-router-dom';
import CTA from './CTA.jsx';

const testimonials = [
  {
    name: 'Sarah Thompson',
    text: 'The website design exceeded my expectations. It’s fast, sleek, and exactly what I needed for my business.'
  },
  {
    name: 'David Lee',
    text: 'Exceptional service! The site looks stunning and works perfectly across all devices. Highly recommended.'
  },
  {
    name: 'Ayesha Malik',
    text: 'I’m thrilled with the results. The site reflects my brand perfectly and helped boost my online presence.'
  },
  {
    name: 'John Carter',
    text: 'Professional, responsive, and creative. My website was up and running faster than I imagined.'
  },
  {
    name: 'Fatima Noor',
    text: 'Beautiful work! The team brought my vision to life and made sure everything was optimized and secure.'
  },
  {
    name: 'Hamza Raza',
    text: 'Clean layout, fast loading time, and amazing attention to detail. My clients love the new design.'
  },
  {
    name: 'Lisa Andrews',
    text: 'Super impressed with the design quality. Communication was smooth, and delivery was right on time.'
  },
  {
    name: 'Ali Khan',
    text: 'Top-tier work with excellent after-launch support. My website now feels professional and user-friendly.'
  },
  {
    name: 'Emily Rodriguez',
    text: 'Absolutely love the work! My website feels alive and intuitive. Couldn’t have asked for better service.'
  }
];

const skillCards = [
  {
    title: 'Brand-first Design',
    description: 'Modern visual systems, responsive layouts, and polished UI that feel premium.',
    icon: '✨'
  },
  {
    title: 'WordPress & Shopify',
    description: 'Custom stores, landing pages, and CMS-driven sites optimized for growth.',
    icon: '🛒'
  },
  {
    title: 'Performance Focus',
    description: 'Fast loading experiences and clean code for every device and screen size.',
    icon: '⚡'
  },
];

const About = () => {
  return (
    <div className="about-page">
      <section className="about-banner">
        <div className="banner-content">
          <div>
            <span className="banner-eyebrow">About</span>
            <h1>Designing digital experiences with style, speed, and strategy.</h1>          </div>
          <nav className="breadcrumb">
            <NavLink to="/">Home</NavLink> <span>/</span> <span>About</span>
          </nav>
        </div>
      </section>

      <section className="about-hero">
        <div className="hero-copy">
          <span className="eyebrow">Creative Web Development</span>
          <h2>Building premium websites that look stunning and work flawlessly.</h2>
          <p>
            I specialize in WordPress, Shopify, and React development with a focus on polished visuals, strong performance, and seamless user experiences. Every project is crafted to help businesses convert more visitors and grow with confidence.
          </p>
          <div className="hero-highlights">
            <div className="highlight-pill">200+ projects delivered</div>
            <div className="highlight-pill">Mobile-first & responsive</div>
            <div className="highlight-pill">Fast launch timelines</div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-glow"></div>
            <div className="hero-card-panel">
              <div className="panel-title">Design + Code</div>
              <p>Interactive layouts with refined 3D depth. Built to impress and convert.</p>
              <div className="panel-stats">
                <div>
                  <strong>4.9/5</strong>
                  <span>Client Rating</span>
                </div>
                <div>
                  <strong>98%</strong>
                  <span>Client Success</span>
                </div>
              </div>
            </div>
            <div className="hero-image-frame">
              <img src="Murtaza.png" alt="Muhammad Murtaza" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-grid-section">
        <div className="about-grid-card glass-card">
          <span className="eyebrow">What I offer</span>
          <h3>Thoughtful websites with meaningful motion and refined structure.</h3>
          <p>
            My process combines creative direction, strong UX, and responsive implementation so every website feels premium and performs well across devices.
          </p>
        </div>
        <div className="about-grid-card dark-card">
          <span className="eyebrow">How I work</span>
          <h3>Collaborative, transparent, and focused on results.</h3>
          <ul>
            <li>Discovery and visual direction</li>
            <li>Fast prototypes and clear feedback cycles</li>
            <li>Clean deployment and ongoing support</li>
          </ul>
        </div>
        <div className="about-grid-card glass-card">
          <span className="eyebrow">Why choose me</span>
          <h3>Reliable development with a polished digital finish.</h3>
          <p>
            I deliver modern, responsive sites that feel premium, load quickly, and capture the attention of your audience.
          </p>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading">
          <span className="eyebrow">Specialties</span>
          <h2>Core strengths for modern brands.</h2>
        </div>
        <div className="skills-grid">
          {skillCards.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.title}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-header">
          <span className="eyebrow">Testimonials</span>
          <h2>Clients share what makes the experience memorable.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t, idx) => (
            <article className="testimonial-card" key={idx}>
              <p>“{t.text}”</p>
              <span>- {t.name}</span>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default About;
