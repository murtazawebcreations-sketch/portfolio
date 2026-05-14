import React from "react";
import "./Servicessection.css";
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Custom WordPress Development",
    description: "Bespoke WordPress themes & plugins tailored to your brand.",
    image: "Custom WordPress Development.jpg"
  },
  {
    title: "WooCommerce Store Development",
    description: "Build fast, secure, and conversion-optimized WooCommerce stores.",
    image: "WooCommerce Store Development.jpg"
  },
  {
    title: "Shopify Store Setup & Customization",
    description: "Professional Shopify store design, theme customization, and setup.",
    image: "Shopify Store Setup & Customization.jpg"
  },
  {
    title: "Frontend Development (ReactJS)",
    description: "Modern, interactive web interfaces using ReactJS and JavaScript.",
    image: "Frontend Development (ReactJS).jpg"
  },
  {
    title: "Responsive Website Design",
    description: "Mobile-first, pixel-perfect websites using HTML, CSS, and Tailwind.",
    image: "Responsive Website Design.jpg"
  },
  {
    title: "Speed Optimization",
    description: "Improve site speed, SEO rankings, and Core Web Vitals performance.",
    image: "Speed Optimization.jpg"
  }
  

];

export default function Servicessection() {
  return (
    <section id="services-section1" className="services-section1">
      <h2 className="services-subheading">What I Offer</h2>
      <h2 className="section-title">Modern web solutions built for performance and growth.</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card1">
            <img
              src={`/${service.image}`}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="explore-services-wrapper">
        <Link to="/services" className="btn">
          Explore Services
        </Link>
      </div>
    </section>
  );
}
