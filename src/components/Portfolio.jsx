import React, { useState } from 'react';
import { FaPalette, FaVideo, FaCode, FaTimes } from 'react-icons/fa';
import PortfolioModal from './PortfolioModal';

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState(null);

  const categories = [
    {
      id: 'graphic',
      icon: <FaPalette />,
      title: 'Graphic Design',
      description: 'Logos, branding, social media graphics, and marketing materials',
      count: '8 Projects',
    },
    {
      id: 'video',
      icon: <FaVideo />,
      title: 'Video Editing',
      description: 'YouTube content, promotional videos, and motion graphics',
      count: '6 Projects',
    },
    {
      id: 'web',
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Responsive websites, web applications, and e-commerce solutions',
      count: '12 Projects',
    },
  ];

  return (
    <>
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <h2>My Portfolio</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
            Browse my work across different categories. Click any section to view detailed projects.
          </p>
          
          <div className="portfolio-categories">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="portfolio-category"
                onClick={() => setActiveModal(category.id)}
              >
                <div className="category-content">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <div className="project-count">{category.count}</div>
                  <button className="hero-btn btn-primary">See Designs</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioModal
        isOpen={activeModal === 'graphic'}
        onClose={() => setActiveModal(null)}
        title="Graphic Design Projects"
        projects={[
          {
            title: 'Brand Identity for Tech Startup',
            description: 'Complete logo, color palette, and brand guidelines',
            tools: ['Photoshop', 'Illustrator'],
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
          },
          {
            title: 'Social Media Campaign Graphics',
            description: 'Series of graphics for Instagram marketing campaign',
            tools: ['Canva', 'Photoshop'],
            background: 'linear-gradient(135deg, #10b981, #3b82f6)',
          },
          {
            title: 'Product Packaging Design',
            description: 'Packaging design for eco-friendly product line',
            tools: ['Photoshop', '3D Mockup'],
            background: 'linear-gradient(135deg, #f59e0b, #b45309)',
          },
        ]}
      />

      <PortfolioModal
        isOpen={activeModal === 'web'}
        onClose={() => setActiveModal(null)}
        title="Web Development Projects"
        projects={[
          {
            title: 'E-commerce Platform',
            description: 'Full-featured online store with shopping cart',
            tools: ['HTML/CSS', 'JavaScript', 'Firebase'],
            background: "url('/myprojects/inkpulse.PNG') center/contain no-repeat",
            link: { text: 'InkPulse Website', url: 'https://inkpulse.com.lk' },
          },
          {
            title: 'Restaurant Website',
            description: 'Responsive site with menu and reservation system',
            tools: ['React', 'Google Maps API'],
            background: 'linear-gradient(135deg, #10b981, #3b82f6)',
          },
          {
            title: 'Portfolio Website',
            description: 'Custom portfolio with animations and contact form',
            tools: ['HTML/CSS', 'JavaScript', 'SEO'],
            background: 'linear-gradient(135deg, #f59e0b, #b45309)',
          },
        ]}
      />

      <PortfolioModal
        isOpen={activeModal === 'video'}
        onClose={() => setActiveModal(null)}
        title="Video Editing Projects"
        projects={[
          {
            title: 'Corporate Promotional Video',
            description: '3-minute company introduction with motion graphics',
            tools: ['Premiere Pro', 'After Effects'],
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
          },
          {
            title: 'YouTube Travel Vlog',
            description: 'Travel series with color grading and sound design',
            tools: ['Premiere Pro', 'Color Grading'],
            background: 'linear-gradient(135deg, #10b981, #3b82f6)',
          },
          {
            title: 'Social Media Ad Campaign',
            description: 'Series of short videos for Instagram/Facebook ads',
            tools: ['CapCut', 'Motion Graphics'],
            background: 'linear-gradient(135deg, #f59e0b, #b45309)',
          },
        ]}
      />
    </>
  );
};

export default Portfolio;