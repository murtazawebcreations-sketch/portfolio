import React from 'react';
import './HomePortfolio.css';
import './Portfolio.css';
import { NavLink } from 'react-router-dom';
import CTA from './CTA.jsx';

const projects = [
  {
    title: 'Boxer Athletics',
    image: '/portfolio/boxer-athletics.png',
    link: 'https://www.boxerathletics.com/'
  },
  {
    title: 'Silver Oak College',
    image: '/portfolio/silver-oak-college.png',
    link: 'https://silveroakcollege.ca/'
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
    title: 'Go For Barber',
    image: '/portfolio/go-for-barber.png',
    link: 'https://goforbarber.ca/'
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
    <div className="portfolio-page">
      <section className="portfolio-banner">
        <div className="banner-content fade-in">
          <h1>Portfolio</h1>
          <nav className="breadcrumb">
            <NavLink to="/">Home</NavLink> <span>/</span> <span>Portfolio</span>
          </nav>
        </div>
      </section>

      <section className="home-portfolio-section portfolio-page-portfolio">
        <div className="home-portfolio-container">
          <span className="portfolio-subheading">Bold portfolios, polished results</span>
          <h1 className="portfolio-heading">
            Explore a curated gallery of sites built with <span>clarity</span> and strong visual impact.
          </h1>

          <div className="home-portfolio-grid">
            {projects.map((project, index) => (
              <div className="home-portfolio-item" key={index}>
                <div className="portfolio-img-wrapper">
                  <img src={encodeURI(project.image)} alt={project.title} />
                  <a className="btn" href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Portfolio;