import React from 'react';

/**
 * Reusable Card component using Premium Glassmorphism
 */
const Card = ({ children, title, className = '', onClick }) => {
  return (
    <div
      className={`glass-card ${className}`}
      onClick={onClick}
    >
      {title && <h3 style={{ margin: 0, color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>{title}</h3>}
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{children}</div>
    </div>
  );
};

export default Card;
