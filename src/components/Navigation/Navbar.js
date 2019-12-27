import React, {useMemo} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import navLogo from '../../media/icon.png';
import history from '../../history';



function Navbar() {

  const path = history.location.pathname;

  useMemo(()=>{
    switch(path){
      case "/github": 
        console.log('hello github');
        break;
      case "/":
        console.log('hello home');
        break;

      default:
        break
    }
  }, [history.location.pathname])

  
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="my-nav-logo">
          <img src={navLogo} alt=""/>
        </div>

        <div className="nav-links-container">
          <NavLink exact={true} to="/" className="nav-links">Home</NavLink>
          <NavLink to="/about" className="nav-links">About</NavLink>
          <NavLink to="/projects" className="nav-links">Projects</NavLink>
          <NavLink to="/github" className="nav-links">Github</NavLink>
          <NavLink to='/lexicon' className="nav-links">Lexicon</NavLink>
        </div>
      
        <div className="nav-icons">
          <a href="https://www.linkedin.com/in/michal-klauza-b22318186/"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/klauza"><i className="fab fa-github"></i></a>
        </div>

      </div>
    </div>
  )
}

export default withRouter(Navbar)
