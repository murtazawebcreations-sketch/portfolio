import React from 'react';
import "./Education.css";

export default function Education() {
  return (
    <div className="resume-section">
      <h2 className="resume-title">
        My Resume
        <div className="resume-underline">
          <div className="dot dot-small"></div>
          <div className="dot dot-medium"></div>
          <div className="dot dot-small gray"></div>
        </div>
      </h2>

      <div className="resume-grid">
        {/* Experiences */}
        <div className="resume-column">
          <h3 className="section-title">Experiences</h3>

          {[{
            id: 1,
            years: "2023 - 2025",
            title: "WordPress Developer",
            company: "Seller Pro",
            description: `Working as a WordPress & Custom Developer at Seller Pro since 2022, I have developed and optimized 200+ websites, including WooCommerce and eCommerce platforms. My role involves creating responsive, high-performance, and user-friendly websites, ensuring seamless functionality and modern design.`
          }, {
            id: 2,
            years: "2021 - Present",
            title: "Independent Web Developer",
            company: "Self-Employed (Freelance)",
            description: `Building and managing personal web development projects, I specialize in creating responsive, modern, and high-performance websites using HTML, CSS, JavaScript, ReactJS, Bootstrap, and Tailwind CSS. I have independently designed and developed multiple projects, focusing on UI/UX, functionality, and seamless user experiences.`
          }].map((item) => (
            <div key={item.id} className="resume-item">
              <div className="badge">{item.id}</div>
              <div className="item-years">{item.years}</div>
              <div className="item-title">{item.title}</div>
              <div className="item-company">{item.company}</div>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="resume-column">
          <h3 className="section-title">Education</h3>

          {[{
            id: 3,
            years: "2010 - 2020",
            title: "Matriculation in Computer Science",
            institution: "Allied School",
            description: `Matriculation in Computer Science – Gained a strong foundation in computer fundamentals, problem-solving, and logical thinking.`
          }, {
            id: 4,
            years: "2020 - 2022",
            title: "Intermediate in Computer Science (ICS)",
            institution: "Aspire College",
            description: `Intermediate in Computer Science (ICS) – Studied programming, mathematics, and computer applications, enhancing analytical and technical skills.`
          }, {
            id: 5,
            years: "2022 - 2026",
            title: "BS Computer Science",
            institution: "Lahore Leads University",
            description: `BS Computer Science (Completed) – Graduated with comprehensive expertise in algorithms, web development, software engineering, databases, and modern development practices.`
          }].map((item) => (
            <div key={item.id} className="resume-item">
              <div className="badge">{item.id}</div>
              <div className="item-years">{item.years}</div>
              <div className="item-title">{item.title}</div>
              <div className="item-company">{item.institution}</div>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  );
}