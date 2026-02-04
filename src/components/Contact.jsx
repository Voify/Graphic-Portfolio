import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.\n\nI'll get back to you at ${formData.email} within 24 hours regarding your ${formData.service} inquiry.`);
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>mithunminsara10@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Phone / WhatsApp</h4>
                <p>+94 70 268 5025</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className="social-icons" style={{ justifyContent: 'flex-start', marginTop: '2rem' }}>
              <a href="https://wa.me/94702685025" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="mailto:mithunminsara10@gmail.com" className="social-icon">
                <FaEnvelope />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icon">
                <FaGithub />
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="graphic">Graphic Design</option>
                  <option value="web">Web Development</option>
                  <option value="video">Video Editing</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="full">Full Package</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="hero-btn btn-primary" style={{ width: '100%' }}>
                <FaPaperPlane className="btn-icon" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;