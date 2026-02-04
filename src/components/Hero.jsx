import React, { useState, useEffect } from 'react';
import { FaCogs, FaPaperPlane, FaChevronDown } from 'react-icons/fa';
import { FaWhatsapp, FaEnvelope, FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import { Typewriter } from './Typewriter';
import FloatingLines from './FloatingLines';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Floating Lines Background */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <FloatingLines 
          enabledWaves={["top","middle","bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={["#9b0f0f", "#0f13e7", "#048600"]} // Add gradient colors
        />
      </div>
      
      {/* Hero Content */}
      <div className="hero-content container" style={{ position: 'relative', zIndex: 2 }}>
        <h1>HI, My name is</h1>
        <h1>Mithun Minsara</h1>
        
        <Typewriter />
        
        <p>Professional creative designer and web developer from Colombo, Sri Lanka. I transform ideas into stunning digital experiences through innovative design and cutting-edge development.</p>
        
        <div className="hero-buttons">
          <a href="#services" className="hero-btn btn-primary">
            <FaCogs className="btn-icon" />
            View Services & Pricing
          </a>
          <a href="#contact" className="hero-btn btn-secondary">
            <FaPaperPlane className="btn-icon" />
            Contact Me Now
          </a>
        </div>

        <div className="social-icons">
          <a href="https://wa.me/94702685025" className="social-icon" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="mailto:mithunminsara10@gmail.com" className="social-icon" title="Email">
            <FaEnvelope />
          </a>
          <a href="#" className="social-icon" title="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" className="social-icon" title="GitHub">
            <FaGithub />
          </a>
          <a href="#" className="social-icon" title="Behance">
            <FaBehance />
          </a>
        </div>
      </div>

      <div className="scroll-down" style={{ zIndex: 2 }}>
        <FaChevronDown />
      </div>
    </section>
  );
};

export default Hero;