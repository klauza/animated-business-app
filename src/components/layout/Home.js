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
            <img src={heroImg} alt="" className="container-home__hero--img" onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageErrored.bind(this)} />
            
            <div className="container-home__hero--para">
              <p>There is a long journey behind me, but even longer... ahead.</p>
            </div>
          </div>

          <div className="container-home__experience">
            <span>EXPERIENCE</span>
          </div>

          <div className="container-home__skill-icons">
            <div className="icon-container"><i className="fab fa-js-square"></i><div className="desc">JavaScript</div></div>
            <div className="icon-container"><i className="fab fa-react"></i><div className="desc">React</div></div>
            <div className="icon-container"><i className="fab fa-sass"></i><div className="desc">Sass</div></div>
            <div className="icon-container"><i className="fas fa-tools"></i><div className="desc">Regex</div></div>
            <div className="icon-container"><i className="fas fa-code-branch"></i><div className="desc">Github</div></div>
            <div className="icon-container"><i className="fab fa-html5"></i><div className="desc">HTML</div></div>
            <div className="icon-container"><i className="fab fa-bootstrap"></i><div className="desc">Bootstrap</div></div>
            <div className="icon-container"><i className="fas fa-boxes"></i><div className="desc">RESTful API</div></div>
          </div>
        </div>
      </div>
    )
  }
}
