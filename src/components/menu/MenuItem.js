import React from 'react';

const MenuItem = ({ scrollTo, text, setMenuOpen }) => {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={`#${scrollTo}`}>
        {text}
        <div className="line" />
      </a>
    </li>
  );
};

export default MenuItem;
