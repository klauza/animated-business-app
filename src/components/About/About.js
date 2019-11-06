import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { pageLoad } from '../../actions/mainAction';
import ReactImageAppear from 'react-image-appear';

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
    .then(() => setLoading(false))
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



  // const handleImageLoaded = () => { 
  //   setLoading(false);
  // }
  // const handleImageErrored = () => {
  //   setLoading(true);
  // }


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
          <div className="about__top">I'm Michal, a self taught coder with desire to gain programming knowledge. I'm a friendly, ambitious and motivated person.</div>	
          <div className="about__separator">  </div>
          <h1 className="about__mid"><span id="about-text">ABOUT</span></h1>
          <h1 className="about__mid-right"><span id="me-text">ME</span></h1>
          <p className="about__bottom">I began my coding adventure back in 2018 exploring what web development is. React was overwhelming that time. Today, I aim to get deeper and better in this JS framework but I also develop my time in environment around it: on Redux, node plus Express.js and databases. I enjoy coding and will definitely bind it for a longer time with my life. I also possess a good working knowledge with photoshop.</p>
          <div className="about__image">
            <ReactImageAppear showLoader={false} placeholderStyle={{ transition: "all ease 350ms", backgroundColor: 'black' }} src={image} animation="fadeIn" easing="ease-in" alt="" />
          </div>
        </div>
        
        <div className="about-contacts">
          <div> <span> <a href="tel:07719122293">07719122293</a> </span> <i className="material-icons"> phone_enabled </i> </div>
          <div> <i className="material-icons"> email </i> <span> <a href="mailto:klauza.dev@gmail.com">klauza.dev@gmail.com</a> </span></div>
        </div>
      </div>
    )
  } else{
    return(
      <div className="spinner">
        <img src={spinner} alt=""/>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
  main: state.main
})
export default connect(mapStateToProps, {pageLoad})(About)