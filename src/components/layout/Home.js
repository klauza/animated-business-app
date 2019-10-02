import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { pageLoad } from '../../actions/mainAction';

import heroImg from '../../media/hero-imgs/hero.jpg';
import spinner from '../../media/loader2.gif';
import animateBlocks from './shadow.js';
import HomeSkills from './HomeSkills';
import HomeModals from './HomeModals';
import M from 'materialize-css/dist/js/materialize.min.js'; // modals


const Home = ({pageLoad, main: {pageLoaded}}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    M.AutoInit(); // Initializes Materialize JS

    if(pageLoaded.home){
      startBlockAnim();
    }




  }, [loading])


  if(!pageLoaded.home){
    loadImageAsync(heroImg)
    .then(() => pageLoad({...pageLoaded, home: true}) )
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




  // animate each skill block
  const blockIconsLoad = (target) => {
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




  const handleImageLoaded = () => { 
    setLoading(false);
  }
  const handleImageErrored = () => {
    setLoading(true);
  }


  const startBlockAnim = () => {
    document.querySelectorAll('.icon-container').forEach(blockIconsLoad); // apply animation function to each block
    animateBlocks();
  }




  if(pageLoaded.home === true){
    
  return (
    <div className="home">
      <HomeModals />

      <div className="container-home">

    
        <div className="container-home__hero">
          <img src={heroImg} alt="" className="container-home__hero--img" onLoad={handleImageLoaded} onError={handleImageErrored} />
          
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
} else {
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
export default connect(mapStateToProps, {pageLoad})(Home)