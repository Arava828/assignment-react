import React, { useState } from 'react';

const ToggleButton = () => {
  const [active, setActive] = useState(false);

  const changeStyle = () => {
    setActive((prev) => !prev);
  };

  return (
    <button
      onClick={changeStyle}
      style={{
        background: active ? '#28a745' : '#007bff',
        padding: '10px 25px',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      Toggle Color
    </button>
  );
};

export default ToggleButton;
