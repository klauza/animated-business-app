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
        <div className="about__top">Hey there, my name is Michal and <div className="secret-text">I'm glad</div> you came here to see my portfolio. <div className="secret-text-two">Alright</div>, without further delay I'd like you to read few words about me.</div>	
        <h1 className="about__mid"><span id="about-text">ABOUT</span></h1>
        <h1 className="about__mid-right"><span id="me-text">ME</span></h1>
        <p className="about__bottom">Web development was around me for quite a while, but in serious way I started to think about it since 2018. I enjoy coding, struggling with problems, creating something from nothing. The final results provide me phenomenal feelings and injection of positivity. Mainly I'm creating Single Page Applications. For last period of time I was practicingwith React.</p>
        <figure><img src={image} alt="" className="about__image" onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageErrored.bind(this)} /></figure>
      </div>
    </div>
    )
  
  
  }
}
