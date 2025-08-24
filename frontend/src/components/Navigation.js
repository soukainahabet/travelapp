import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [accountDropdownActive, setAccountDropdownActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fermer le menu quand la route change
    setAccountDropdownActive(false);
  }, [location]);

  const toggleAccountDropdown = () => {
    setAccountDropdownActive(!accountDropdownActive);
  };

  const handleLogout = () => {
    logout();
    setAccountDropdownActive(false);
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={() => setAccountDropdownActive(false)}>
            ✈️ TravelApp
          </Link>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reservation" className="nav-link">
              Reservation
            </Link>
          </li>

          {/* My Account Dropdown */}
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={toggleAccountDropdown}
            >
              Mon Compte
              <span className={`dropdown-arrow ${accountDropdownActive ? 'active' : ''}`}>▼</span>
            </button>

            {accountDropdownActive && (
              <div className="dropdown-menu">
                {isAuthenticated ? (
                  <>
                    <div className="dropdown-header">
                      Bonjour, {user.name}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="dropdown-link logout-link"
                    >
                      Déconnexion
                    </button>
                    <Link
                      to="/my-bookings"
                      className="dropdown-link"
                      onClick={() => setAccountDropdownActive(false)}
                    >
                      Mes Réservations
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/signin"
                      className="dropdown-link"
                      onClick={() => setAccountDropdownActive(false)}
                    >
                      Se connecter
                    </Link>
                    <Link
                      to="/signup"
                      className="dropdown-link"
                      onClick={() => setAccountDropdownActive(false)}
                    >
                      S'inscrire
                    </Link>
                  </>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;