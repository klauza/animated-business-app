import React from 'react';
import { NavLink } from 'react-router-dom';
import navLogo from '../../media/icon.png';



function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="my-nav-logo">
          <img src={navLogo} alt=""/>
        </div>

        <div className="nav-links-container">
          <NavLink exact={true} to="/" className="nav-links">Home</NavLink>
          <NavLink to="/about" className="nav-links">About</NavLink>
          <NavLink to="/portfolio" className="nav-links">Portfolio</NavLink>
          <NavLink to="/github" className="nav-links">Github</NavLink>
        </div>
      
        <div className="nav-icons">
          <a href="https://www.linkedin.com/in/michal-klauza-b22318186/"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/klauza"><i className="fab fa-github"></i></a>
        </div>

      </div>
    </div>
  )
}

export default Navbar
