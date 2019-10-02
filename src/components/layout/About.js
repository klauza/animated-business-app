import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { pageLoad } from '../../actions/mainAction';

import image from '../../media/about-pc.jpeg';
import spinner from '../../media/loader2.gif';




const About = ({pageLoad, main: {pageLoaded}}) => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    if(pageLoaded.about){
      startAbout();
    }

  }, [loading])

  if(!pageLoaded.about){
    loadImageAsync(image)
    .then(() => pageLoad({...pageLoaded, about: true}))
    .catch(reason => console.log(reason));
  }

  function loadImageAsync(image){
    return new Promise((resolve, reject) => {
      const img1 = new Image();
      img1.addEventListener('load', event => resolve(img1));
      img1.addEventListener('erorr', reason => reject(new Error('error')));
      img1.src = image
    })
  }



  const handleImageLoaded = () => { 
    setLoading(false);
  }
  const handleImageErrored = () => {
    setLoading(true);
  }


  const startAbout = () =>{
    try{

      const aboutText = document.querySelector('#about-text');
      const meText = document.querySelector('#me-text');
      const aboutPage = document.querySelector('.about');
      // const aboutSpinner = document.querySelector('.about-spinner');

      aboutPage.style.transition = "all 350ms ease-in";
      aboutPage.style.opacity = "1";
      // aboutSpinner.style.transition = "all 350ms ease-out";
      // aboutSpinner.style.opacity = "0";
      // aboutSpinner.style.visibility = "none";
      // console.log('load');
      setTimeout(() => {
        aboutText.style.transform = "translateX(-50%)"
      }, 125)
      setTimeout(() => {
        meText.style.transform = "translateX(-50%)"
      }, 125)
      
    } catch(err){console.log(err)}
  }



  if(pageLoaded.about === true){
    return (
      <div className="about-main-container">


        <div className="about">
          <div className="about__top">I'm Michal, a self taught coder with desire to gain more and more knowledge. I'm friendly, ambitious and motivated person.</div>	
          <div className="about__separator">  </div>
          <h1 className="about__mid"><span id="about-text">ABOUT</span></h1>
          <h1 className="about__mid-right"><span id="me-text">ME</span></h1>
          <p className="about__bottom">I began my adventure back in 2018 exploring what web development is. React was overwhelming that time, but today, I aim to get deeper and deeper into that library. Currently I'm focusing on react, javascript, sass and node.js. I enjoy coding and will definitely bind it for a longer time with my life. I also possess a good working knowledge with photoshop.</p>
          <figure><img src={image} alt="" className="about__image" onLoad={handleImageLoaded} onError={handleImageErrored} /></figure>
        </div>
        
        <div className="about-contacts">
          <div> <span> <a href="tel:07719122293">07719122293</a> </span> <i className="material-icons"> phone_enabled </i> </div>
          <div> <i className="material-icons"> email </i> <span> <a href="mailto:klauza.dev@gmail.com">klauza.dev@gmail.com</a> </span></div>
        </div>
      </div>
    )
  } else{
    return(
      <div className="home-spinner">
        <img src={spinner} alt=""/>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
  main: state.main
})
export default connect(mapStateToProps, {pageLoad})(About)