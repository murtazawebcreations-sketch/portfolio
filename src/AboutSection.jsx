import React from 'react';
import './AboutSection.css';
import AboutImage from './AboutImage';




export default function AboutSection() {
  return (
    <div>
      <section id="about-section" className="about-section">
      <h2 className="section-title">About</h2>
      <p className="about-intro">
        I'm a dedicated and detail-oriented web developer who loves transforming ideas into powerful online experiences. With a strong command over modern web technologies, I build scalable, responsive, and visually stunning websites.
      </p>

      <div className="about-content">
        <div className="about-image">
          <AboutImage />
        </div>

        <div className="about-details">
          <h3 className="about-title">Designing Experiences, Building Solutions</h3>
          <p className="about-description italic">
            I'm a passionate WordPress, Shopify, and React Developer with over 2 years of experience building clean, fast, and user-centric websites. I have completed my BS Computer Science from Lahore Leads University, where I specialized in custom WordPress themes, WooCommerce stores, Shopify storefronts, and interactive React interfaces. I'm highly skilled in HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, Elementor, and front-end frameworks like ReactJS.
          </p>

          <div className="info-grid">
            <ul>
              <li><strong>Birthday:</strong> 21 June 2003</li>
              <li><strong>Website:</strong><a href="https://murtazawebcreations.vercel.app" target="_blank" rel="noopener noreferrer"> murtazawebcreations.vercel.app</a></li>
              <li><strong>Phone:</strong> <a href="tel:+923164667703"> +923164667703</a></li>
              <li><strong>City:</strong><a href="https://maps.app.goo.gl/tadZ5UUSRAisps9FA" target="_blank" rel="noopener noreferrer"> Lahore, Pakistan</a></li>
            </ul>
            <ul>
              <li><strong>Age:</strong> 22</li>
              <li><strong>Degree:</strong> BSCS</li>
              <li><strong>Email:</strong><a href="mailto:murtazawebcreations@email.com">  murtazawebcreations@gmail.com</a></li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>

          <p className="about-description">
            I’ve successfully developed over 200 websites for local and international clients, ranging from small business sites to full eCommerce platforms. With a strong eye for UI/UX and a focus on performance, my mission is to build solutions that are both beautiful and functional. I'm always looking for exciting projects where I can create real value through design and development.
          </p>
        </div>
      </div>
    </section>
  


    </div>
  );
}






