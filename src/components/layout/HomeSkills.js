import React from 'react';
import webpackImg from '../../media/hero-imgs/webpack.png';
import M from 'materialize-css/dist/js/materialize.min.js';

const HomeSkills = () => {
  return (
    <div className="container-home__skill-icons">
      <a href="#javascript-modal" className="modal-trigger skill-block-parent"><div data-delay="1" className="icon-container"><i className="fab fa-js-square"></i><div className="desc">JavaScript</div></div></a>
      <a href="#" className="skill-block-parent"><div data-delay="2" className="icon-container"><i className="fab fa-react"></i><div className="desc">React</div></div></a>
      <a href="#" className="skill-block-parent"><div data-delay="3" className="icon-container"><i className="fab fa-sass"></i><div className="desc">Sass</div></div></a>
      <a href="#" className="skill-block-parent"><div data-delay="4" className="icon-container"><i className="fas fa-tools"></i><div className="desc">Regex</div></div></a>
      <a href="#" className="skill-block-parent"><div data-delay="5" className="icon-container"><i className="fas fa-code-branch"></i><div className="desc">Github</div></div></a>
      <a href="#" className="skill-block-parent"><div data-delay="6" className="icon-container"><i className="fab fa-html5"></i><div className="desc">HTML</div></div></a>
      <a href="#" className="skill-block-parent"><div data-delay="7" className="icon-container"><i className="fab fa-bootstrap"></i><div className="desc">Bootstrap</div></div></a>
      <a href="#" className="skill-block-parent"><div data-delay="8" className="icon-container"><i className="fas fa-boxes"></i><div className="desc">RESTful API</div></div></a>
      <a href="#" className="skill-block-parent"><div data-delay="9" className="icon-container"><img src={webpackImg} alt=""/><div className="desc">Bundlers</div></div></a>
    </div>
  )
}

export default HomeSkills
