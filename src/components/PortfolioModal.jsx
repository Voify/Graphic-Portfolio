import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const PortfolioModal = ({ isOpen, onClose, title, projects }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="portfolio-modal active" onClick={(e) => e.target.classList.contains('portfolio-modal') && onClose()}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-modal" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div 
                  className="project-preview"
                  style={{ background: project.background }}
                ></div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tools">
                  {project.tools.map((tool, i) => (
                    <span key={i}>{tool}</span>
                  ))}
                  {project.link && (
                    <a href={project.link.url} target="_blank" rel="noopener noreferrer">
                      {project.link.text}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;