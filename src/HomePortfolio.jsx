import React from 'react';
import './HomePortfolio.css';
import { Link } from 'react-router-dom';


const homePortfolioItems = [
  
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
    title: 'Go For Barber',
    image: '/portfolio/go-for-barber.png',
    link: 'https://goforbarber.ca/'
  }
];

export default function HomePortfolio() {
  return (
    <section className="home-portfolio-section">
      <div className="home-portfolio-container">
        <h2 className="portfolio-subheading">Featured Projects</h2>
        <h1 className="portfolio-heading">A showcase of projects built with <span>passion and precision</span>.</h1>

        <div className="home-portfolio-grid">
          {homePortfolioItems.map((item, index) => (
            <div className="home-portfolio-item" key={index}>
              <div className="portfolio-img-wrapper">
                <img src={encodeURI(item.image)} alt={item.title} />
                <a className="btn" href={item.link} target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </div>
              <div className="portfolio-info">
                <h3>{item.title}</h3>
              </div>
            </div>
        ))}
      </div>

        <div className="explore-portfolio-wrapper">
          <Link to="/portfolio" className="btn">
            Explore Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}