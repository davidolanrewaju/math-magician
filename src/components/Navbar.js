import React from 'react';
import './Navbar.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo_container">
        <Link to="/" className="logo">Math Magician</Link>
      </div>
      <div className="nav_links">
        <ul className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/calculator" className="link">Calculator</Link>
          <Link to="/quotes" className="link">Quotes</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
