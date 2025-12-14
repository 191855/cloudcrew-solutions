import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="service-grid">
        <div className="service-item">
          <h3>Strategic Planning</h3>
          <p>Develop robust strategies to align your resources with your long-term business objectives for sustainable success.</p>
        </div>
        <div className="service-item">
          <h3>Operational Efficiency</h3>
          <p>Optimize your workflows, reduce waste, and enhance productivity through lean methodologies and process re-engineering.</p>
        </div>
        <div className="service-item">
          <h3>Talent Management & Resource Provision</h3>
          <p>Attract, develop, and retain top talent, including highly skilled professionals across diverse technology stacks and specialized development fields, through our comprehensive management and leadership programs.</p>
        </div>
        <div className="service-item">
          <h3>Cloud Solutions & Expertise</h3>
          <p>Leverage our highly talented resources to design, implement, and manage robust solutions across various cloud and hybrid environments, optimizing your infrastructure for performance, security, and cost-efficiency.</p>
        </div>
        <div className="service-item">
          <h3>Expert Developer Staffing</h3>
          <p>Gain access to a pool of highly skilled and experienced developers across various technologies to accelerate your projects and augment your in-house teams with specialized expertise.</p>
        </div>
        <div className="service-item">
          <h3>Change Management</h3>
          <p>Navigate organizational transitions smoothly with our expert guidance, ensuring seamless adoption and minimal disruption.</p>
        </div>
        <div className="service-item">
          <h3>Digital Transformation</h3>
          <p>Leverage cutting-edge technology to innovate your business models and enhance customer experiences.</p>
        </div>
        <div className="service-item">
          <h3>Financial Advisory</h3>
          <p>Gain insights into your financial health and optimize resource allocation for maximum return on investment.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
