import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaWordpress, FaReact, FaShopify, FaLaptopCode, FaRocket, FaDraftingCompass, FaRedoAlt, FaLayerGroup} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import './Services.css';
import CTA from './CTA.jsx';

const Services = () => {
  return (
    <div className="services">

      <section className="Services-banner">
        <div className="banner-content fade-in">
          <h1>Services</h1>
          <nav className="breadcrumb">
            <NavLink to="/">Home</NavLink> <span>/</span> <span>Services</span>
          </nav>
        </div>
      </section>

      <h1 className="services-title">Innovative Solutions for Your Growth</h1>
      <div className="services-container">
        <div className="service-card">
          <div className="icon">
            <FaWordpress />
          </div>
          <h2>WordPress Development</h2>
          <p>Custom, scalable WordPress websites tailored for businesses that prioritize speed and SEO.</p>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaShopify />
          </div>
          <h2>Shopify Store Setup</h2>
          <p>Build high-converting Shopify stores with elegant layouts and smooth checkout experiences.</p>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaShopify />
          </div>
          <h2>Shopify Customization</h2>
          <p>Advanced theme and feature customizations that align perfectly with your business goals.</p>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaWordpress />
          </div>
          <h2>WooCommerce Stores</h2>
          <p>Powerful, responsive online stores built with WooCommerce and WordPress integration.</p>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaReact />
          </div>
          <h2>React Frontend Development</h2>
          <p>Dynamic and interactive UIs using modern ReactJS principles for speed and scalability.</p>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaLaptopCode />
          </div>
          <h2>Responsive Website Design</h2>
          <p>Pixel-perfect, mobile-first design that adapts seamlessly to all device screens.</p>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaRocket />
          </div>
          <h2>Speed Optimization</h2>
          <p>Improve load times and performance scores with advanced caching and optimization techniques.</p>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaDraftingCompass />
          </div>
          <h2>UI/UX Design</h2>
          <p>Transforming Figma designs into clean code with smooth interactions and visual hierarchy.</p>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaRedoAlt />
          </div>
          <h2>Website Redesign & Maintenance</h2>
          <p>Give your site a fresh, modern look with ongoing technical support and updates.</p>
        </div>

        <div className="service-card">
          <div className="icon">
            <FaLayerGroup />
          </div>
          <h2>Landing Page Design</h2>
          <p>High-converting landing pages that are clean, fast, and built for lead generation.</p>
        </div>
        <div className="service-card">
          <div className="icon">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
          <h2>Website Performance Audit</h2>
          <p>Comprehensive analysis of your website’s speed and performance with actionable improvements for better user experience and SEO rankings.</p>
        </div>
        <div className="service-card">
          <div className="icon">
            <FontAwesomeIcon icon={faSearchengin} />
          </div>
          <h2>SEO-Friendly Website Development</h2>
          <p>Build websites structured for search engine visibility with optimized code, fast loading speeds, and proper on-page SEO foundations.</p>
        </div>
      </div>

       {/* Call to Action Section */}
      <CTA />
    </div>
  );
};

export default Services;
