import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <div className="nav-bar">
      <div className="container">

        <div className="nav-links-container">
          <NavLink exact={true} to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
          <NavLink to="/skills" className="nav-link">Skills</NavLink>
          <NavLink to="/github" className="nav-link">Github</NavLink>
        </div>
      
        <div className="nav-icons">
          <a href="https://www.google.com"><i className="fa fa-linkedin"></i></a>
          <a href="https://www.google.com"><i className="fa fa-github"></i></a>
        </div>

      </div>
    </div>
  )
}

export default Navbar
