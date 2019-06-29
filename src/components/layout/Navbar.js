import React from 'react';
import { NavLink } from 'react-router-dom';
import navLogo from '../../media/favicon.ico';



function Navbar() {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="nav-logo">
          <img src={navLogo} alt=""/>
        </div>

        <div className="nav-links-container">
          <NavLink exact={true} to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
          <NavLink to="/skills" className="nav-link">Skills</NavLink>
          <NavLink to="/github" className="nav-link">Github</NavLink>
        </div>
      
        <div className="nav-icons">
          <a href="https://www.google.com"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.google.com"><i className="fab fa-github"></i></a>
        </div>

      </div>
    </div>
  )
}

export default Navbar
