import React, { Component } from 'react';
import image from '../../media/about-pc.jpeg';
import spinner from '../../media/loader2.gif';




export default class About extends Component {

  componentDidMount(){
    document.querySelector('.about').style.opacity ="0";
    document.querySelector('.about-spinner').style.opacity = "1";
  }

  state = {
    loading: true
  }





  handleImageLoaded(){ 
    //console.log('done');
    //this.setState({loading: false})
    this.setState({ loading: false});
    this.startAbout();
  }
  handleImageErrored() {
    this.setState({ loading: true});
  }

  startAbout(){
    const aboutText = document.querySelector('#about-text');
    const meText = document.querySelector('#me-text');
    const aboutPage = document.querySelector('.about');
    const aboutSpinner = document.querySelector('.about-spinner');

    aboutPage.style.transition = "all 350ms ease-in";
    aboutPage.style.opacity = "1";
    aboutSpinner.style.transition = "all 350ms ease-out";
    aboutSpinner.style.opacity = "0";
    aboutSpinner.style.visibility = "none";
    // console.log('load');
  setTimeout(() => {
    aboutText.style.transform = "translateX(-50%)"
  }, 125)
  setTimeout(() => {
    meText.style.transform = "translateX(-50%)"
  }, 125)
  }


  render() {
    // const { loading } = this.state;
    
    // console.log(loading);


    
 
    return (
  	<div className="about-main-container">

      <div className="about-spinner">
        <img src={spinner} alt=""/>
      </div>

      <div className="about">
        <div className="about__top">I'm Michal, a self taught coder with ambitions to be a fullstack javascript developer. I'm friendly, ambitious and motivated person.</div>	
        <h1 className="about__mid"><span id="about-text">ABOUT</span></h1>
        <h1 className="about__mid-right"><span id="me-text">ME</span></h1>
        <p className="about__bottom">I began my adventure back in 2018 exploring what web development is. React was overwhelming that time, but today, I aim to get deeper and deeper into that library. Currently I'm focusing on react, javascript, sass and node.js. I enjoy coding and will definitely bind it for a longer time with my life. I also possess a good working knowledge with photoshop.</p>
        <figure><img src={image} alt="" className="about__image" onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageErrored.bind(this)} /></figure>
      </div>
    </div>
    )
  
  
  }
}
