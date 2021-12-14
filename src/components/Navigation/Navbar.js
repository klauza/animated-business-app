import React, { useMemo } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import navLogo from '../../media/icon.png';
import history from '../../history';

function Navbar() {
  const path = history.location.pathname;

  useMemo(() => {
    switch (path) {
      case '/github':
        console.log('hello github');
        break;
      case '/':
        console.log('hello home');
        break;

      default:
        break;
    }
  }, [history.location.pathname]);

  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="my-nav-logo">
          <img src={navLogo} alt="" />
        </div>

        <div className="nav-links-container">
          <NavLink exact={true} to="/" className="nav-links">
            Home
          </NavLink>
          <NavLink to="/projects" className="nav-links">
            Projects
          </NavLink>
          <NavLink to="/about" className="nav-links">
            About
          </NavLink>
          <NavLink to="/services" className="nav-links">
            Services
          </NavLink>
          <NavLink to="/contact" className="nav-links">
            Contact
          </NavLink>
        </div>

        <div className="nav-icons">
          <a href="https://www.google.com/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.google.com/">
            {/* <i className="fab fa-github"></i> */}
            <i class="fab fa-flickr"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Navbar);
