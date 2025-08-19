import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fermer le menu quand la route change
    setMenuActive(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  // Fonction pour vérifier si un lien est actif
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <span>✈️ TravelApp</span>
          </Link>
        </div>

        {/* Menu principal */}
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
           <li className="nav-item">
                      <a href="#destinations" className="nav-link">Destination</a>
          </li>
          <li className="nav-item">
            <Link
              to="/reservation"
              className={`nav-link ${isActiveLink('/reservation') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Reservation
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signin"
              className={`nav-link ${isActiveLink('/signin') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={`nav-link signup-btn ${isActiveLink('/signup') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Hamburger menu */}
        <div
          className={`hamburger ${menuActive ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;