import React from 'react';
import './AboutSection.css';
import AboutImage from './AboutImage';

export default function AboutSection() {
  return (
    <section id="about-section" className="about-section">
      <div className="about-top">
        <div className="about-label">About Me</div>
        <h2 className="about-heading">Building modern websites with creativity and precision.</h2>
        <p className="about-intro">
          I enjoy creating websites that not only look great but also perform smoothly across every device. My focus is on clean design, fast performance, and delivering experiences that leave a lasting impression.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-left-panel">
          <div className="visual-card">
            <AboutImage />
            <div className="badge-card badge-highlight">
              <span>03+</span>
              Years Experience
            </div>
            <div className="badge-card badge-secondary">
              <span>250+</span>
              Projects Completed
            </div>
          </div>
        </div>

        <div className="about-right-panel">
          <h3 className="about-title">Designing experiences and building solutions with purpose.</h3>
          <p className="about-description italic">
            I’m a passionate developer specializing in custom WordPress themes, Shopify stores, and React interfaces. My work blends strong UX decisions, speedy performance, and modern aesthetics.
          </p>

          <div className="info-grid">
            <ul>
              <li><strong>Email:</strong> <a href="mailto:murtazawebcreations@gmail.com">murtazawebcreations@gmail.com</a></li>
              <li><strong>Website:</strong> <a href="https://murtazawebcreations.vercel.app" target="_blank" rel="noopener noreferrer">murtazawebcreations.vercel.app</a></li>
              <li><strong>Phone:</strong> <a href="tel:+923164667703">+923164667703</a></li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
            <ul>
              <li><strong>Degree:</strong> BSCS</li>
              <li><strong>Age:</strong> 23</li>
              <li><strong>Birthday:</strong> 21 June 2003</li>
              <li><strong>City:</strong> <a href="https://maps.app.goo.gl/tadZ5UUSRAisps9FA" target="_blank" rel="noopener noreferrer">Lahore, Pakistan</a></li>
            </ul>
          </div>

          <div className="progress-section">
            <div className="progress-item">
              <div className="progress-label">
                <span>WordPress</span>
                <strong>89%</strong>
              </div>
              <div className="progress-bar"><div className="progress-fill fill-wordpress"></div></div>
            </div>
            <div className="progress-item">
              <div className="progress-label">
                <span>React.js</span>
                <strong>90%</strong>
              </div>
              <div className="progress-bar"><div className="progress-fill fill-react"></div></div>
            </div>
            
            <div className="progress-item">
              <div className="progress-label">
                <span>Shopify</span>
                <strong>85%</strong>
              </div>
              <div className="progress-bar"><div className="progress-fill fill-shopify"></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
