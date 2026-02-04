import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import PlanCard from './PlanCard';

const ServicePlans = () => {
  const graphicPlans = [
    {
      tier: 'bronze',
      name: 'Basic Design',
      price: 'LKR500-800',
      description: 'Perfect for simple design needs and startups',
      features: [
        { text: '2 Custom Logo Designs', included: true },
        { text: '3 Social Media Graphics', included: true },
        { text: '1 Business Card Design', included: true },
        { text: '2 Revision Rounds', included: true },
        { text: 'Brand Guidelines', included: false },
        { text: 'Source Files', included: false },
        { text: 'Unlimited Revisions', included: false },
      ],
    },
    {
      tier: 'silver',
      name: 'Professional Design',
      price: 'LKR800-1,500',
      description: 'Comprehensive design package for growing businesses',
      features: [
        { text: '5 Custom Logo Designs', included: true },
        { text: '10 Social Media Graphics', included: true },
        { text: 'Complete Brand Identity', included: true },
        { text: '5 Revision Rounds', included: true },
        { text: 'Basic Brand Guidelines', included: true },
        { text: 'Source Files Included', included: true },
        { text: 'Unlimited Revisions', included: false },
      ],
    },
    {
      tier: 'gold',
      name: 'Premium Design',
      price: 'LKR1500 ONWARDS',
      description: 'Complete design solution for established brands',
      features: [
        { text: 'Unlimited Logo Concepts', included: true },
        { text: '20+ Social Media Graphics', included: true },
        { text: 'Full Brand Identity System', included: true },
        { text: 'Unlimited Revisions', included: true },
        { text: 'Complete Brand Guidelines', included: true },
        { text: 'All Source Files', included: true },
        { text: '3 Months Support', included: true },
      ],
    },
  ];

  const webPlans = [
    {
      tier: 'bronze',
      name: 'Basic Website',
      price: 'LKR 5000-10 000',
      description: 'Simple, responsive website for small businesses',
      features: [
        { text: '3-5 Page Website', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Contact Form', included: true },
        { text: 'Basic SEO Setup', included: true },
        { text: 'E-commerce Features', included: false },
        { text: 'CMS Integration', included: false },
        { text: 'Advanced Animations', included: false },
      ],
    },
    {
      tier: 'silver',
      name: 'Business Website',
      price: 'LKR15 000-40 000',
      description: 'Feature-rich website for growing businesses',
      features: [
        { text: '5-10 Page Website', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Contact & Inquiry Forms', included: true },
        { text: 'Advanced SEO', included: true },
        { text: 'CMS Integration (WordPress)', included: true },
        { text: 'Basic Animations', included: true },
        { text: 'Custom Web Applications', included: false },
      ],
    },
    {
      tier: 'gold',
      name: 'Premium Web App',
      price: 'LKR 45000 ONWARDS',
      description: 'Custom web applications with advanced features',
      features: [
        { text: 'Custom Web Application', included: true },
        { text: 'Firebase Authentication', included: true },
        { text: 'Google Maps Integration', included: true },
        { text: 'Full SEO Package', included: true },
        { text: 'Custom CMS', included: true },
        { text: 'Advanced Animations', included: true },
        { text: '6 Months Support', included: true },
      ],
    },
  ];

  const videoPlans = [
    {
      tier: 'bronze',
      name: 'Basic Editing',
      price: 'LKR 800-1500',
      description: 'Simple video editing for social media content',
      features: [
        { text: 'Up to 5 min video', included: true },
        { text: 'Basic Cuts & Trims', included: true },
        { text: 'Text Overlays', included: true },
        { text: 'Music Addition', included: true },
        { text: 'Color Grading', included: false },
        { text: 'Motion Graphics', included: false },
        { text: 'Sound Design', included: false },
      ],
    },
    {
      tier: 'silver',
      name: 'Professional Editing',
      price: 'LKR 2000-3500',
      description: 'High-quality editing for YouTube & social media',
      features: [
        { text: 'Up to 10 min video', included: true },
        { text: 'Advanced Editing', included: true },
        { text: 'Color Correction', included: true },
        { text: 'Basic Motion Graphics', included: true },
        { text: 'Sound Design', included: true },
        { text: '3 Revision Rounds', included: true },
        { text: 'Advanced VFX', included: false },
      ],
    },
    {
      tier: 'gold',
      name: 'Premium Production',
      price: 'LKR3500 ONWARDS',
      description: 'Professional video production with advanced effects',
      features: [
        { text: 'Up to 20 min video', included: true },
        { text: 'Advanced Color Grading', included: true },
        { text: 'Complex Motion Graphics', included: true },
        { text: 'Professional Sound Design', included: true },
        { text: 'Visual Effects (VFX)', included: true },
        { text: 'Unlimited Revisions', included: true },
        { text: 'Multiple Export Formats', included: true },
      ],
    },
  ];

  const handlePlanSelect = (planName, price, serviceType) => {
    alert(`Thank you for selecting the ${planName} plan!\nPrice: ${price}\n\nPlease fill out the contact form below and I'll get back to you within 24 hours.`);
  };

  return (
    <section id="services" className="service-plans">
      <div className="container">
        <h2>Service Plans</h2>

        {/* Graphic Design Plans */}
        <div className="service-category">
          <h3 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '2rem' }}>
            Graphic Design Plans
          </h3>
          <div className="plan-tiers">
            {graphicPlans.map((plan, index) => (
              <PlanCard key={index} {...plan} onSelect={handlePlanSelect} />
            ))}
          </div>
        </div>

        {/* Web Development Plans */}
        <div className="service-category">
          <h3 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '2rem' }}>
            Web Development Plans
          </h3>
          <div className="plan-tiers">
            {webPlans.map((plan, index) => (
              <PlanCard key={index} {...plan} onSelect={handlePlanSelect} />
            ))}
          </div>
        </div>

        {/* Video Editing Plans */}
        <div className="service-category">
          <h3 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '2rem' }}>
            Video Editing Plans
          </h3>
          <div className="plan-tiers">
            {videoPlans.map((plan, index) => (
              <PlanCard key={index} {...plan} onSelect={handlePlanSelect} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;