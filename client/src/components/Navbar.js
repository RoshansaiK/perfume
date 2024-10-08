import React from "react";
import { Link } from "react-scroll"; // Use react-scroll for smooth scrolling
import "bootstrap-icons/font/bootstrap-icons.css";
import { TbPerfume } from "react-icons/tb";
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">
        <span className="curve">Perfume Shop</span>
        <TbPerfume />
      </h1>
      <ul className="navbar-links">
        <li>
          <Link to="home" smooth={true} duration={500}>
            <i className="bi bi-house"></i> Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            <i className="bi bi-info-circle"></i> About Us
          </Link>
        </li>
        <li>
          <Link to="collections" smooth={true} duration={500}>
            <i className="bi bi-list"></i> Collections
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <i className="bi bi-envelope"></i> Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
