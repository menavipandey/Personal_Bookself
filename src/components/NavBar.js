import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1 to="/">Bookshelf</h1>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Search</Link>
          <Link to="/bookshelf" onClick={() => setIsOpen(false)}>My Bookshelf</Link>
        </div>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
