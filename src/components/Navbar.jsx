import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === '/Packages' || location.pathname === '/About' || location.pathname === "/Contact" ;

  if (isHomePage) {
    return null; 
  }
  return (
    <nav className="navbar">
      <h1 className="logo">Serene Lanka</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Destinations">Destinations</Link></li>
        <li><Link to="/Packages">Packages</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;