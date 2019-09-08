import React, { Component } from 'react';
import heroImg from '../../media/hero-imgs/hero.jpg';
import spinner from '../../media/loader2.gif';
import animateBlocks from './shadow.js';
import HomeSkills from './HomeSkills';


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
            <span>TOOL PALETTE</span>
          </div>

          <HomeSkills />
          
        </div>
      </div>
    )
  }
}
