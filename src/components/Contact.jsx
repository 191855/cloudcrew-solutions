import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p><strong>Address:</strong> 1925 Warrington Way, Cumming GA 30040</p>
          <p><strong>Phone:</strong> +1(703) 462-4718</p>
          <p><strong>Email:</strong> info@cloudcrew-solutions.com</p>
          <p><strong>Hours:</strong> Mon-Fri: 9 AM - 5 PM</p>
        </div>
        <div className="contact-form">
          <form action="#" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
