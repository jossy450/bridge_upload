import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div>
      {/* Slider Section */}
      <div className="slider-container">
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Recruitment Success Stories</h1>
        <Slider {...sliderSettings}>
          <div className="slide">
            <img
              src="/images/recruitment1.jpg"
              alt="Team Collaboration"
              className="slider-image"
            />
            <div className="slide-content">
              <h2>Team Collaboration</h2>
              <p>
                Our team-building strategies are designed to foster collaboration and productivity in the workplace.
                By matching the right individuals to the right teams, we help organizations create a culture of inclusivity and innovation.
              </p>
              <p>
                Companies have reported a 30% increase in project success rates after implementing our collaborative recruitment strategies.
                We take pride in enabling teams to work cohesively toward shared goals.
              </p>
            </div>
          </div>
          <div className="slide">
            <img
              src="/images/recruitment2.jpg"
              alt="Professional Workspace"
              className="slider-image"
            />
            <div className="slide-content">
              <h2>Professional Workspace</h2>
              <p>
                At Bridgestone Recruitment, we understand the importance of a professional workspace in driving employee satisfaction and productivity.
                Our recruitment process ensures candidates align perfectly with your company culture and goals.
              </p>
              <p>
                From startups to established enterprises, we’ve successfully placed over 5,000 candidates in workplaces where they can thrive.
                Let us help you create a professional environment that inspires excellence.
              </p>
            </div>
          </div>
          <div className="slide">
            <img
              src="/images/recruitment3.jpg"
              alt="Successful Candidates"
              className="slider-image"
            />
            <div className="slide-content">
              <h2>Successful Candidates</h2>
              <p>
                Our track record of placing successful candidates speaks for itself. Each placement is a tailored match between the candidate's skills and the company’s needs.
              </p>
              <p>
                With a focus on long-term career growth, our candidates are equipped to make significant contributions from day one.
                Join the growing list of organizations that rely on Bridgestone for their recruitment needs.
              </p>
            </div>
          </div>
          <div className="slide">
            <img
              src="/images/recruitment4.jpg"
              alt="Diverse Opportunities"
              className="slider-image"
            />
            <div className="slide-content">
              <h2>Diverse Opportunities</h2>
              <p>
                Bridgestone Recruitment offers a diverse range of opportunities tailored to fit the unique needs of our clients.
                From engineering and healthcare to IT and logistics, we cater to industries across the spectrum.
              </p>
              <p>
                Our comprehensive approach ensures both employers and employees achieve their goals seamlessly.
                Explore the possibilities with Bridgestone Recruitment.
              </p>
            </div>
          </div>
        </Slider>
      </div>

      {/* Welcome Section */}
      <section className="welcome">
        <h2>Welcome to Bridgestone Recruitment</h2>
        <p>
          Bridgestone Recruitment is committed to connecting top talent with leading organizations worldwide. 
          Our tailored recruitment strategies and industry expertise empower professionals and businesses to achieve their goals.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Recruitment & Outsourcing</h3>
            <p>Providing tailored staffing solutions for businesses of all sizes.</p>
          </div>
          <div className="service-item">
            <h3>Property Management</h3>
            <p>Comprehensive letting, renting, and property maintenance services.</p>
          </div>
          <div className="service-item">
            <h3>Transport & Logistics</h3>
            <p>Efficient transportation and logistics solutions for businesses.</p>
          </div>
          <div className="service-item">
            <h3>General Business Services</h3>
            <p>Expert consultancy to help you streamline operations and grow.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
