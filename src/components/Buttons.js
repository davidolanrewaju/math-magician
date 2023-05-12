import React from 'react';

// eslint-disable-next-line react/prop-types
function Buttons({ value, className, onClick }) {
  return (
    <input type="button" onClick={onClick} value={value} className={className} />
  );
}

export default Buttons;
