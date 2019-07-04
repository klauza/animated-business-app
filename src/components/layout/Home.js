import React, { Component } from 'react';
import heroImg from '../../media/hero-imgs/hero.jpg';
import spinner from '../../media/loader2.gif';

export default class Home extends Component {
  componentDidMount(){
    document.querySelector('.container-home').style.opacity ="0";
    document.querySelector('.home-spinner').style.opacity = "1";
  }

  constructor(props){
    super(props);
    this.state = { loading: true}
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
            <img src={heroImg} className="container-home__hero--img" onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageErrored.bind(this)} />
            
            <div className="container-home__hero--para">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, vel?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae vero excepturi porro odit minus officiis ex fugiat enim pariatur!</p>
            </div>

          </div>

          <div className="container-home__experience">
            <span>EXPERIENCE</span>
          </div>

          <div className="container-home__skill-icons">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
      </div>
    )
  }
}
