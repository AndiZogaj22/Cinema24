// components/GradientContainer.js
import React from 'react';

const GradientContainer = ({ children }) => {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      {children}
    </div>
  );
};

export default GradientContainer;
