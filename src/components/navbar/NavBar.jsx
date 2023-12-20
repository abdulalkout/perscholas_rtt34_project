import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky-nav">
      <div className="navbar">
        <img
          className="logo"
          src="https://cdn2.abiresearch.com/static/company_logos/3471_Control4.webp"
          alt="Logo"
        />
        <div className={`pageLinks ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-links">
            Home
          </Link>
          <a className="nav-links">API's</a>
          <a className="nav-links">Stories</a>
          <Link to="/about" className="nav-links">
            About
          </Link>
        </div>

        <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      </div>
    </div>
  );
}

export default NavBar;
