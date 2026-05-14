import React from 'react';
import './Portfolio.css';
import { NavLink } from 'react-router-dom';

const projects = [
  {
    title: 'Go For Barber',
    image: '/portfolio/go-for-barber.png',
    link: 'https://goforbarber.ca/'
  },
  {
    title: 'Silver Oak College',
    image: '/portfolio/silver-oak-college.png',
    link: 'https://silveroakcollege.ca/'
  },
  {
    title: 'Boxer Athletics',
    image: '/portfolio/boxer-athletics.png',
    link: 'https://www.boxerathletics.com/'
  },
  {
    title: 'Pro Canada Construction',
    image: '/portfolio/pro-canada-construction.png',
    link: 'https://procanadaconstruction.ca/'
  },
  {
     title: 'Vanguard Builders',
    image: '/portfolio/vanguard.png',
    link: 'https://vanguardbuilders.ca/'
  },
  {
    title: 'Kashmir Grill',
    image: '/portfolio/kashmir-grill.png',
    link: 'https://kashmirgrill.ca/'
  },
  {
    title: 'Final Dash Property',
    image: '/portfolio/final-dash.png',
    link: 'https://finaldash.ca/'
  },
  {
    title: 'Grow More Workforce',
    image: '/portfolio/grow-more-work.png',
    link: 'https://growmoreworkforce.com/'
  },
  {
    title: 'Home & Haven',
    image: '/portfolio/home-haven.png',
    link: 'https://homeandhavensl.com/'
  },
  {
    title: 'Haulfather',
    image: '/portfolio/haulfather.png',
    link: 'https://haulfather.ca/'
  },
  {
    title: 'Swiss Snow Blowing',
    image: '/portfolio/swiss-snow-blowing.png',
    link: 'https://swisssnowblowing.ca/'
  },
  {
    title: 'Whiteline Drywall',
    image: '/portfolio/whiteline-drywall.png',
    link: 'https://whitelinedrywall.ca/'
  }
];

const Portfolio = () => {
  return (
    <section className="main-portfolio-section">
      <section className="portfolio-banner">
        <div className="banner-content fade-in">
          <h1>Portfolio</h1>
          <nav className="breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>Portfolio</span>
          </nav>
        </div>
      </section>
      <div className="portfolio-intro">
        <p className="portfolio-tagline">Showcasing Excellence Through Every Pixel</p>
        <h2 className="portfolio-main-heading">Featured Projects</h2>
      </div>
      <div className="portfolio-gallery">
        {projects.map((project, index) => (
          <div className="portfolio-box" key={index}>
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
              <a href={project.link} className="visit-btn" target="_blank" rel="noopener noreferrer">Visit Site</a>
            </div>
            <div className="portfolio-info">
              <h3 className="portfolio-title">{project.title}</h3>
            </div>
          </div>
          
        ))}
        
      </div>
      <section className="cta-section fade-in">
        <h2>Ready to start your project?</h2>
        <p>Let’s work together to build something amazing!</p>
        <NavLink to="/contact" className="btn">Contact Me</NavLink>
      </section>
      
    </section>
    
  );
};

export default Portfolio;