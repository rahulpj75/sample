import React from 'react';

const Header = ({ links }) => {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;