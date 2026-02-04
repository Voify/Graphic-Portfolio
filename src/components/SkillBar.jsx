import React, { useEffect, useRef, useState } from 'react';

const SkillBar = ({ skill, percentage, delay = 0, animate = false }) => {
  const progressRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (animate && !hasAnimated && progressRef.current) {
      // Add a delay based on the index
      const timer = setTimeout(() => {
        setHasAnimated(true);
        if (progressRef.current) {
          progressRef.current.style.width = `${percentage}%`;
        }
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [animate, hasAnimated, percentage, delay]);

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          ref={progressRef} 
          className="skill-progress"
          style={{ 
            width: hasAnimated ? `${percentage}%` : '0%',
            transition: hasAnimated ? `width 1.5s ease ${delay}ms` : 'none'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;