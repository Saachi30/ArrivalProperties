import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      {/* <div className="header-rera">
      <p>RERA No: A51800047925</p>
      </div> */}
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <div className="nav-logo-text">
              <span style={{ color: "brown" }}>Arrival Properties</span>
              <p style={{ color: "black" }}>If it's genuine, it's Arrival</p>
            </div>
          </Link>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
