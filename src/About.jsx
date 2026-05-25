import React from 'react';
import './About.css'
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


const About = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="about-banner">
        <div className="banner-content fade-in">
          <h1>About</h1>
          <nav className="breadcrumb">
            <NavLink to="/">Home</NavLink> <span>/</span> <span>About</span>
          </nav>
        </div>
      </section>

      {/* About Section */}
      <section className="about-main-section slide-up">
        <div className="about-main-content">
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              I’m Muhammad Murtaza, a passionate web developer with expertise in WordPress, Shopify, and React. I love building beautiful, functional, and responsive websites that help businesses grow and stand out online.
            </p>
            <p>
              With over 2 years of experience and 200+ projects, I focus on delivering quality, performance, and great user experiences.
            </p>
          </div>
          <div className="about-image">
            <img src="Murtaza.png" alt="Murtaza" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section fade-in">
        <div className="mission-vision-container">
          <div className="mission-card">
            <h3> Mission</h3>
            <p>
              To empower businesses and individuals with innovative, user-friendly, and visually stunning web solutions that drive success and growth.
            </p>
          </div>
          <div className="vision-card">
            <h3> Vision</h3>
            <p>
              To be recognized as a leading web developer, known for creativity, reliability, and exceptional results in the digital world.
            </p>
          </div>
        </div>
      </section>

     {/* Testimonials Section */}
<section className="testimonials-section slide-up">
  <h2 className="testimonials-title">Testimonials</h2>
  <div className="testimonials-carousel-wrapper">
    <div className="testimonials-carousel">
      {[...testimonials, ...testimonials].map((t, idx) => (
        <div className="testimonial-card fade-in" key={idx}>
          <p className="testimonial-text">"{t.text}"</p>
          <span className="testimonial-name">- {t.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Call to Action Section */}
      <CTA />
    </div>
  );
};

export default About;
