import React, { Fragment, useEffect, useState, useContext } from 'react';
import { connect } from 'react-redux';
import { pageLoad } from '../../actions/mainAction';
// import ReactImageAppear from 'react-image-appear';

// blue-ish bg
import { heroBackground } from '../../media';

import image from '../../media/profile.jpg';

import { ThemeContext } from '../../context/ThemeContext';

// css
import { Container } from './AboutCSS';
import styled from 'styled-components';

// footer
import Footer from '../Footer/Footer';

const AboutMain = styled.div``;

const About = ({ pageLoad, main: { pageLoaded } }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pageLoaded.about) {
      startAbout();
    }
    // eslint-disable-next-line
  }, [loading]);

  const { light, dark, theme } = useContext(ThemeContext);
  const motive = theme.theme.night ? dark : light;

  if (!pageLoaded.about) {
    loadImageAsync(image)
      .then(() => pageLoad({ ...pageLoaded, about: true }))
      .then(() => setLoading(false))
      .catch((reason) => console.log(reason));
  }

  function loadImageAsync(image) {
    return new Promise((resolve, reject) => {
      const img1 = new Image();
      img1.addEventListener('load', (event) => resolve(img1));
      img1.addEventListener('erorr', (reason) => reject(new Error('error')));
      img1.src = image;
    });
  }

  // const handleImageLoaded = () => {
  //   setLoading(false);
  // }
  // const handleImageErrored = () => {
  //   setLoading(true);
  // }

  const startAbout = () => {
    try {
      const aboutText = document.querySelector('#about-text');
      const meText = document.querySelector('#me-text');
      // const aboutPage = document.querySelector('.about');
      // const aboutSpinner = document.querySelector('.about-spinner');

      // aboutPage.style.transition = "all 350ms ease-in";
      // aboutPage.style.opacity = "1";

      // aboutSpinner.style.transition = "all 350ms ease-out";
      // aboutSpinner.style.opacity = "0";
      // aboutSpinner.style.visibility = "none";
      // console.log('load');
      setTimeout(() => {
        aboutText.style.transform = 'translateX(-50%)';
      }, 125);
      setTimeout(() => {
        meText.style.transform = 'translateX(-50%)';
      }, 125);
    } catch (err) {
      console.log(err);
    }
  };

  // if(pageLoaded.about === true){
  return (
    <AboutMain
      // background={heroBackground}
      // className="about-main-container"
      // themeBackground={motive.background}
      themeTextColor={motive.text}
      isNight={theme.theme.night}
    >
      <Container background={heroBackground}>
        <div className="about about-main-container">
          <div className="about__top">My name is Lincoln.</div>
          <div className="about__separator"> </div>
          {pageLoaded.about && (
            <Fragment>
              <h1 className="about__mid">
                <span id="about-text">ABOUT</span>
              </h1>
              <h1 className="about__mid-right">
                <span id="me-text">ME</span>
              </h1>
            </Fragment>
          )}
          <p className="about__bottom">
            I began my traveling adventure back in 1974 exploring what world
            actually is. Traveling was overwhelming that time, couldn't find a
            good way to traverse through countries. I enjoy traveling and will
            definitely explore more and more as time goes by. I have a vast
            knowledge about many places thus can be hired as a guide. Have also
            a competent skillset in photography in many kind. I also possess a
            good working knowledge with photoshop.
          </p>
          <div className="about__image">
            {/* {pageLoaded.about && <ReactImageAppear showLoader={false} placeholderStyle={{ transition: "all ease 350ms", backgroundColor: 'black' }} src={image} animation="fadeIn" easing="ease-in" alt="" /> } */}
            {pageLoaded.about ? <img src={image} alt="" /> : null}
          </div>
        </div>

        {/* <div className="about-contacts">
          <div>
            {' '}
            <span>
              {' '}
              <a href="tel:07719122293">07719122293</a>{' '}
            </span>{' '}
            <i className="material-icons"> phone_enabled </i>{' '}
          </div>
          <div>
            {' '}
            <i className="material-icons"> email </i>{' '}
            <span>
              {' '}
              <a href="mailto:klauza.dev@gmail.com">
                klauza.dev@gmail.com
              </a>{' '}
            </span>
          </div>
        </div> */}
      </Container>
      <div style={{ marginTop: '-150px' }}>
        <Footer />
      </div>
    </AboutMain>
  );
  // } else{
  //   return(
  //     <div className="spinner">
  //       <img src={spinner} alt=""/>
  //     </div>
  //   )
  // }
};

const mapStateToProps = (state) => ({
  main: state.main,
});
export default connect(mapStateToProps, { pageLoad })(About);
