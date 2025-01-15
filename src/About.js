import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <main className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At Bridgestone Recruitment, our mission is to connect top talent with leading organizations, enabling businesses to thrive and individuals to achieve their career goals.
          </p>
        </section>
        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            To become the most trusted recruitment partner globally, fostering growth and success for businesses and job seekers alike.
          </p>
        </section>
        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We act with honesty and transparency.</li>
            <li><strong>Excellence:</strong> Striving for the highest standards in everything we do.</li>
            <li><strong>Collaboration:</strong> Building strong relationships with clients and candidates.</li>
            <li><strong>Innovation:</strong> Continuously improving and adapting to industry trends.</li>
          </ul>
        </section>
        <section className="timeline">
          <h2>Our Journey</h2>
          <ul>
            <li><strong>2020:</strong> Bridgestone Recruitment was founded.</li>
            <li><strong>2022:</strong> Partnered with 100+ global companies.</li>
            <li><strong>2024:</strong> Helped over 5,000 candidates find jobs.</li>
          </ul>
        </section>
      </main>
      <footer className="about-footer">
        <p>Contact us: info@bridgestonerecruitment.com | +44 123 456 7890</p>
      </footer>
    </div>
  );
}

export default About;
