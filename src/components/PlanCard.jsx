import React, { useRef } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const PlanCard = ({ tier, name, price, description, features, onSelect }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleClick = () => {
    if (onSelect) {
      onSelect(name, price, 'Service');
    }
  };

  return (
    <div ref={ref} className={`plan-card ${tier} ${inView ? 'visible' : ''}`}>
      <div className="plan-badge">{tier.toUpperCase()}</div>
      <h3 className="plan-name">{name}</h3>
      <div className="plan-price">{price}</div>
      <p>{description}</p>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index}>
            {feature.included ? <FaCheck /> : <FaTimes />}
            {feature.text}
          </li>
        ))}
      </ul>
      <button className="plan-button" onClick={handleClick}>
        Choose Plan
      </button>
    </div>
  );
};

export default PlanCard;