import React from 'react';
import webpackImg from '../../media/hero-imgs/webpack.png';

const HomeSkills = () => {
  return (
    <div className="container-home__skill-icons">
      <div href="#javascript-modal" className="modal-trigger skill-block-parent"><div data-delay="1" className="icon-container"><i className="fab fa-js-square"></i><div className="desc">JavaScript</div></div></div>
      <div href="#react-modal" className="modal-trigger skill-block-parent"><div data-delay="2" className="icon-container"><i className="fab fa-react"></i><div className="desc">React</div></div></div>
      <div href="#sass-modal" className="modal-trigger skill-block-parent"><div data-delay="3" className="icon-container"><i className="fab fa-sass"></i><div className="desc">Sass</div></div></div>
      <div href="#regex-modal" className="modal-trigger skill-block-parent"><div data-delay="4" className="icon-container"><i className="fas fa-tools"></i><div className="desc">Regex</div></div></div>
      <div href="#github-modal" className="modal-trigger skill-block-parent"><div data-delay="5" className="icon-container"><i className="fas fa-code-branch"></i><div className="desc">Github</div></div></div>
      <div href="#html-modal" className="modal-trigger skill-block-parent"><div data-delay="6" className="icon-container"><i className="fab fa-html5"></i><div className="desc">HTML</div></div></div>
      <div href="#bootstrap-modal" className="modal-trigger skill-block-parent"><div data-delay="7" className="icon-container"><i className="fab fa-bootstrap"></i><div className="desc">Bootstrap</div></div></div>
      <div href="#rest-modal" className="modal-trigger skill-block-parent"><div data-delay="8" className="icon-container"><i className="fas fa-boxes"></i><div className="desc">RESTful API</div></div></div>
      <div href="#bundlers-modal" className="modal-trigger skill-block-parent"><div data-delay="9" className="icon-container"><img src={webpackImg} alt=""/><div className="desc">Bundlers</div></div></div>
    </div>
  )
}

export default HomeSkills
