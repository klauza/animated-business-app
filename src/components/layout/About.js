import React, { Component } from 'react';
import image from '../../media/about-pc.jpeg';
// import spinner from './loader/load.gif';




export default class About extends Component {

  componentDidMount(){
    document.querySelector('.about').style.opacity ="0";
  }


  constructor(props){
    super(props);
    this.state = { loading: true}
  
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
    document.querySelector('.about').style.opacity = "1";
    console.log('load');
  setTimeout(() => {
      document.querySelector('#about-text').style.transform = "translateX(-50%)"
  }, 125)
  setTimeout(() => {
      document.querySelector('#me-text').style.transform = "translateX(-50%)"
  }, 125)
  }


  render() {
    const { loading } = this.state;
    
    console.log(loading);


    
 
    return (
  	<section className="about">
      <p className="about__top">Hey there, my name is Michal and I'm glad you came here to see my portfolio. Alright, without further delay I'd like you to read few words about me.</p>	
      <h1 className="about__mid"><span id="about-text">ABOUT</span></h1>
      <h1 className="about__mid-right"><span id="me-text">ME</span></h1>
      <p className="about__bottom">Web development was around me for quite a while, but in serious way I started to think about it since 2018. I enjoy coding, struggling with problems, creating something from nothing. The final results provide me phenomenal feelings and injection of positivity. Mainly I'm creating Single Page Applications. For last period of time I was practicing with React. </p>
      <figure><img src={image} alt="" className="about__image" onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageErrored.bind(this)} /></figure>
     
    </section>
    )
  
  
  }
}
