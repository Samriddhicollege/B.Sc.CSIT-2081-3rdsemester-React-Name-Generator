import React from 'react';

/**
 * Reusable Button component integrated with the Premium CSS system
 */
const Button = ({ children, onClick, variant = 'premium', className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
