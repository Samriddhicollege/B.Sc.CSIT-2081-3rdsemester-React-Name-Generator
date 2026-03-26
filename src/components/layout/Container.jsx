import React from 'react';

/**
 * Centered layout container
 */
const Container = ({ children, className = '' }) => {
  return (
    <div 
      className={`container ${className}`} 
      style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '0 2rem', 
        width: '100%' 
      }}
    >
      {children}
    </div>
  );
};

export default Container;
