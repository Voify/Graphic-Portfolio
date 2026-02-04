import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StatItem = ({ target, label }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated && counterRef.current) {
      setHasAnimated(true);
      
      let current = 0;
      const increment = target / 50;
      
      const animateCounter = () => {
        current += increment;
        if (current < target) {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(current);
          }
          requestAnimationFrame(animateCounter);
        } else {
          if (counterRef.current) {
            counterRef.current.textContent = target;
          }
        }
      };
      
      // Start animation with a small delay for smoother effect
      setTimeout(() => {
        requestAnimationFrame(animateCounter);
      }, 100);
    }
  }, [inView, target, hasAnimated]);

  return (
    <div ref={ref} className={`stat-item ${inView ? 'visible' : ''}`}>
      <div className="counter" ref={counterRef}>0</div>
      <p>{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats">
          <StatItem target={18} label="Projects Completed" />
          <StatItem target={15} label="Happy Clients" />
          <StatItem target={98} label="Success Rate %" />
          <StatItem target={12} label="Hours Response Time" />
        </div>
      </div>
    </section>
  );
};

export default Stats;