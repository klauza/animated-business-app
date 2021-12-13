import React from 'react';
import webpackImg from '../../media/hero-imgs/webpack.png';

const HomeSkills = () => {
  return (
    <div className="container-home__skill-icons">
      <div
        href="#javascript-modal"
        className="modal-trigger skill-block-parent shadow-none"
      >
        <div data-delay="1" className="icon-container">
          <i className="fas fa-map-marked-alt"></i>
          <div className="desc">Navigation</div>
        </div>
      </div>
      <div
        href="#react-modal"
        className="modal-trigger skill-block-parent shadow-none"
      >
        <div data-delay="2" className="icon-container">
          <i className="fas fa-hiking"></i>
          <div className="desc">Bag</div>
        </div>
      </div>
      <div
        href="#sass-modal"
        className="modal-trigger skill-block-parent shadow-none"
      >
        <div data-delay="3" className="icon-container">
          <i className="fas fa-campground"></i>
          <div className="desc">Tent</div>
        </div>
      </div>
      <div
        href="#regex-modal"
        className="modal-trigger skill-block-parent shadow-none"
      >
        <div data-delay="4" className="icon-container">
          <i className="fas fa-mitten"></i>
          <div className="desc">Clothing</div>
        </div>
      </div>
      <div
        href="#github-modal"
        className="modal-trigger skill-block-parent shadow-none"
      >
        <div data-delay="5" className="icon-container">
          <i className="fas fa-shoe-prints"></i>
          <div className="desc">Boots</div>
        </div>
      </div>
      <div
        href="#html-modal"
        className="modal-trigger skill-block-parent shadow-none"
      >
        <div data-delay="6" className="icon-container">
          <i className="fab fa-gripfire"></i>
          <div className="desc">Fire, stove</div>
        </div>
      </div>
      <div
        href="#bootstrap-modal"
        className="modal-trigger skill-block-parent shadow-none"
      >
        <div data-delay="7" className="icon-container">
          <i className="fas fa-lightbulb"></i>
          <div className="desc">Headlamp</div>
        </div>
      </div>
      <div
        href="#rest-modal"
        className="modal-trigger skill-block-parent shadow-none"
      >
        <div data-delay="8" className="icon-container">
          <i className="fas fa-fan"></i>
          <div className="desc">Knife</div>
        </div>
      </div>
      <div
        href="#bundlers-modal"
        className="modal-trigger skill-block-parent shadow-none"
      >
        <div data-delay="9" className="icon-container">
          <i className="fas fa-medkit"></i>
          <div className="desc">First-said</div>
        </div>
      </div>
    </div>
  );
};

export default HomeSkills;
