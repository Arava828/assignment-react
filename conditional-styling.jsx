import React from 'react';

const AlertBox = ({ level }) => {
  const colorMap = {
    success: '#2ecc71',
    error: '#e74c3c',
    warning: '#f39c12'
  };

  const currentColor = colorMap[level] || '#bdc3c7';

  return (
    <div
      style={{
        backgroundColor: currentColor,
        color: 'white',
        padding: '12px',
        margin: '10px 0',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}
    >
      Current Status: {level.toUpperCase()}
    </div>
  );
};

export default AlertBox;
