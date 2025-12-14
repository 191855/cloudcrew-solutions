import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Us</h2>
      <div className="about-content">
        <img src="https://img1.wsimg.com/isteam/getty/2245899227/:/rs=w:1023,m" alt="About cloudcrew-solutions" />
        <div className="text">
          <p>CloudCrew Solutions is your strategic partner in digital transformation. We empower your business by embedding highly talented resources precisely where you need them. Our expertise spans the full spectrum of modern technology, from optimizing management resources and streamlining operations to fostering strategic growth with cutting-edge solutions and expert developer talent.</p>
          <p>Our client-centric approach ensures tailored solutions that address your unique challenges, transforming obstacles into opportunities. We believe in building lasting partnerships based on trust, transparency, and measurable results.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
