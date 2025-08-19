import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TravelApp</h3>
            <p>Votre compagnon de voyage pour des aventures inoubliables à travers le monde.</p>
          </div>
          <div className="footer-section">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>contact@travelapp.com</p>
            <p>+212 7 23 45 67 89</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 TravelApp. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;