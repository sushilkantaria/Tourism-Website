import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === '/Destinations';
  

  if (isHomePage) {
    return null; 
  }
  return (
    <nav className="navbar-new">
      <h1 className="logo-new">Serene Lanka</h1>
      <ul className="nav-links-new">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Destinations">Destinations</Link></li>
        <li><Link to="/Packages">Packages</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;