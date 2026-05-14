import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Education from './Education.jsx';
import ServicesSection from './Servicessection.jsx';
import HomePortfolio from './HomePortfolio.jsx';
import './Home.css';
import AboutSection from './AboutSection.jsx';


const Home = () => {
  useEffect(() => {
    var typed = new Typed(".multiple-text", {
      strings: ["Front-End Developer", "WordPress Developer", "Shopify Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);
 
  

  return (
    <div>
      <section className="home">
        {/* My image */}
        <div className="home-img">
          <img src="Murtaza.png" alt="" />
        </div>
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Muhammad Murtaza</h1>
          <h3>And I'm a <span className="multiple-text"></span></h3>
          <p>
            I'm a versatile web developer specializing in WordPress, custom front-end development, and Shopify store creation. With a keen eye for design and user experience, I build websites that not only look stunning but also work seamlessly across all devices. My portfolio showcases a range of projects, from custom-built websites to tailored e-commerce solutions, all designed with precision and functionality in mind.
          </p>
          {/* Find me on Social media */}
          <div className="social-media">
            <a href="https://www.facebook.com/murtaza.webcreations"  target="_blank" rel="noopener noreferrer" style={{ "--i": 6 }}>
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/murtazawebcreations/" target="_blank" rel="noopener noreferrer" style={{ "--i": 7 }}>
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://www.behance.net/M_Murtaza" target="_blank" rel="noopener noreferrer" style={{ "--i": 9 }}>
              <i className="bx bxl-behance"></i>
            </a>
            <a href="https://www.linkedin.com/in/murtazawebcreations/" target="_blank" rel="noopener noreferrer" style={{ "--i": 10 }}>
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/murtazawebcreations" target="_blank" rel="noopener noreferrer" style={{ "--i": 11 }}>
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <a href="/Murtaza%27s%20CV.pdf" download="Murtaza's_CV" className="btn">Download Resume</a>
        </div>
        </section>
       
    <AboutSection />
    <Education />
    <ServicesSection />
    <HomePortfolio />
 
 {/* Call to Action Section */}
      <section className="cta-section fade-in">
        <h2>Ready to start your project?</h2>
        <p>Let’s work together to build something amazing!</p>
        <a href="/contact" className="btn">Contact Me</a>
      </section>
   

    </div>
    
  );
};

export default Home;

