import React from 'react';
import { FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div>
          <a href="#hero" className="logo" style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'inline-block' }}>
            <FaCode /> MithunMinsara
          </a>
          <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>
            Creative Designer & Web Developer based in Colombo, Sri Lanka.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none' }}>
            <li><a href="#hero" style={{ color: 'var(--gray)', textDecoration: 'none', display: 'block', padding: '0.3rem 0', fontSize: '0.9rem', transition: 'var(--transition)' }}>Home</a></li>
            <li><a href="#skills" style={{ color: 'var(--gray)', textDecoration: 'none', display: 'block', padding: '0.3rem 0', fontSize: '0.9rem', transition: 'var(--transition)' }}>Skills</a></li>
            <li><a href="#services" style={{ color: 'var(--gray)', textDecoration: 'none', display: 'block', padding: '0.3rem 0', fontSize: '0.9rem', transition: 'var(--transition)' }}>Services</a></li>
            <li><a href="#contact" style={{ color: 'var(--gray)', textDecoration: 'none', display: 'block', padding: '0.3rem 0', fontSize: '0.9rem', transition: 'var(--transition)' }}>Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Services</h3>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ color: 'var(--gray)', display: 'block', padding: '0.3rem 0', fontSize: '0.9rem' }}>Graphic Design</li>
            <li style={{ color: 'var(--gray)', display: 'block', padding: '0.3rem 0', fontSize: '0.9rem' }}>Web Development</li>
            <li style={{ color: 'var(--gray)', display: 'block', padding: '0.3rem 0', fontSize: '0.9rem' }}>Video Editing</li>
            <li style={{ color: 'var(--gray)', display: 'block', padding: '0.3rem 0', fontSize: '0.9rem' }}>SEO Optimization</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ color: 'var(--dark-gray)', fontSize: '0.8rem' }}>
          © {currentYear} Mithun Minsara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;