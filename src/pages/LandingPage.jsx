import React, { useRef, useEffect } from "react";
import "./LandingPage.css";
import lanka from '../assets/srilankabg.mp4';
import { Link } from "react-router-dom";

const LandingPage = () => {
  const videoRef = useRef(null); 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; 
      videoRef.current.play().catch((error) => {
        console.error("Failed to play the video:", error);
      });
    }
  }, []); 

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className='navbar-homepage'>
        <h1 className="logo-homepage">Serene Lanka</h1>
        <ul className="nav-links-homepage">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Destinations">Destinations</Link></li>
          <li><Link to="/Packages">Packages</Link></li>
          {/* <li><Link to="/About">About</Link></li> */}
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <video
          ref={videoRef} 
          className="background-video"
          autoPlay
          muted
          loop
          src={lanka}
        />
        <div className="overlay">
          <h1>Welcome to Sri Lanka</h1>
          <p>The Pearl of the Indian Ocean</p>
          <Link to='/Destinations'>
            <button className="explore-btn">Explore Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;




