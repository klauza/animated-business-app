import React from // { useMemo }
'react';
import { NavLink, withRouter } from 'react-router-dom';
import navLogo from '../../media/icon.png';
// import history from '../../history';

// CSS
import { Content } from './NavCSS';

function Navbar() {
  // const path = history.location.pathname;

  // useMemo(() => {
  // switch (path) {
  //   case '/github':
  //     break;
  //   case '/':
  //     break;
  //   default:
  //     break;
  // }
  // }, [history.location.pathname]);

  return (
    <Content>
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
            <i className="fab fa-flickr"></i>
          </a>
        </div>
      </div>
    </Content>
  );
}

export default withRouter(Navbar);
