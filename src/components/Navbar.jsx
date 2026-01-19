import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="gradient-text">HS</span>
        </NavLink>

        <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/education" onClick={closeMenu}>Education</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu} className="nav-cta">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
