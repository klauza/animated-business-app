import React, { Component } from 'react';
import heroImg from '../../media/hero-imgs/hero.jpg';
import spinner from '../../media/loader2.gif';
import webpackImg from '../../media/hero-imgs/webpack.png';
import animateBlocks from './shadow.js';

export default class Home extends Component {
  componentDidMount(){
    document.querySelector('.container-home').style.opacity ="0";
    document.querySelector('.home-spinner').style.opacity = "1";

    const targets = document.querySelectorAll('.icon-container');   // target all blocks for animation

    targets.forEach(this.blockIconsLoad); // apply animation function to each block
    animateBlocks();

  }



  state = {
    loading: true
  }

  // animate each skill block
  blockIconsLoad = (target) => {
    const io = new IntersectionObserver((entries, observer) => {

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const block = entry.target;

          const getDelay = block.getAttribute('data-delay');
          
          const delay = getDelay * 75;
          block.style.animation = `animation-icon-block 1250ms forwards ${delay}ms`;
         
          observer.disconnect();
        }
      });
      
    });

    io.observe(target)
  }




  handleImageLoaded(){ 
    this.setState({ loading: false});
    this.startHome();
  }
  handleImageErrored() {
    this.setState({ loading: true});
  }
  startHome(){
    document.querySelector('.container-home').style.opacity = "1";
    document.querySelector('.container-home').style.transition = "all 350ms ease-in";
    document.querySelector('.home-spinner').style.transition = "all 350ms ease-out";
    document.querySelector('.home-spinner').style.opacity = "0";
    document.querySelector('.home-spinner').style.visibility = "none";
  }


  render(){

    return (
      <div className="home">
        <div className="home-spinner">
          <img src={spinner} alt=""/>
        </div>
        <div className="container-home">

      
          <div className="container-home__hero">
            <img src={heroImg} alt="" className="container-home__hero--img" onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageErrored.bind(this)} />
            
            <div className="container-home__hero--para">
              <p>There is a long journey behind me, but even longer... ahead.</p>
            </div>
          </div>

          <div className="container-home__experience">
            <span>EXPERIENCE</span>
          </div>

          <div className="container-home__skill-icons">
            <div className="skill-block-parent"><div data-delay="1" className="icon-container"><i className="fab fa-js-square"></i><div className="desc">JavaScript</div></div></div>
            <div className="skill-block-parent"><div data-delay="2" className="icon-container"><i className="fab fa-react"></i><div className="desc">React</div></div></div>
            <div className="skill-block-parent"><div data-delay="3" className="icon-container"><i className="fab fa-sass"></i><div className="desc">Sass</div></div></div>
            <div className="skill-block-parent"><div data-delay="4" className="icon-container"><i className="fas fa-tools"></i><div className="desc">Regex</div></div></div>
            <div className="skill-block-parent"><div data-delay="5" className="icon-container"><i className="fas fa-code-branch"></i><div className="desc">Github</div></div></div>
            <div className="skill-block-parent"><div data-delay="6" className="icon-container"><i className="fab fa-html5"></i><div className="desc">HTML</div></div></div>
            <div className="skill-block-parent"><div data-delay="7" className="icon-container"><i className="fab fa-bootstrap"></i><div className="desc">Bootstrap</div></div></div>
            <div className="skill-block-parent"><div data-delay="8" className="icon-container"><i className="fas fa-boxes"></i><div className="desc">RESTful API</div></div></div>
            <div className="skill-block-parent"><div data-delay="9" className="icon-container"><img src={webpackImg} alt=""/><div className="desc">Bundler</div></div></div>
          </div>
        </div>
      </div>
    )
  }
}
