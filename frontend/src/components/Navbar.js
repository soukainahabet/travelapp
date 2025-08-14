import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Optional for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TravelApp</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booknow">Book Now</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/destination">Destination</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
