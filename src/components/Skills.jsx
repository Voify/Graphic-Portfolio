import React, { useEffect, useRef, useState } from 'react';
import { FaPaintBrush, FaCode, FaServer } from 'react-icons/fa';
import SkillBar from './SkillBar';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing after animation starts
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const designSkills = [
    { name: 'Adobe Photoshop', percentage: 95 },
    { name: 'Adobe Lightroom', percentage: 90 },
    { name: 'Premiere Pro', percentage: 92 },
    { name: 'After Effects', percentage: 85 },
    { name: 'CapCut', percentage: 95 }
  ];

  const webSkills = [
    { name: 'HTML5', percentage: 98 },
    { name: 'CSS3', percentage: 96 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'Responsive Design', percentage: 95 },
    { name: 'UI/UX Design', percentage: 88 }
  ];

  const backendSkills = [
    { name: 'Firebase', percentage: 95 },
    { name: 'Google Maps API', percentage: 85 },
    { name: 'SEO Optimization', percentage: 90 },
    { name: 'API Integration', percentage: 80 },
    { name: 'Performance Optimization', percentage: 87 }
  ];

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="container">
        <h2>My Skills & Expertise</h2>
        <div className="skills-categories">
          
          {/* Design Skills */}
          <div className="skill-category">
            <h3><FaPaintBrush /> Design & Editing</h3>
            {designSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                skill={skill.name} 
                percentage={skill.percentage} 
                delay={index * 100}
                animate={isVisible}
              />
            ))}
          </div>

          {/* Web Development Skills */}
          <div className="skill-category">
            <h3><FaCode /> Web Development</h3>
            {webSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                skill={skill.name} 
                percentage={skill.percentage} 
                delay={index * 100 + 200}
                animate={isVisible}
              />
            ))}
          </div>

          {/* Backend & Services */}
          <div className="skill-category">
            <h3><FaServer /> Backend & Services</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                skill={skill.name} 
                percentage={skill.percentage} 
                delay={index * 100 + 400}
                animate={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;