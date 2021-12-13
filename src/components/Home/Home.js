import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { pageLoad } from '../../actions/mainAction';
import ReactImageAppear from 'react-image-appear';

// media
import { heroBackground } from '../../media';

// footer
import Footer from '../Footer/Footer';

import heroImg from '../../media/hero-imgs/hero.jpg';
import spinner from '../../media/loader2.gif';
import animateBlocks from './shadow';
import HomeSkills from './HomeSkills';
import HomeModals from './HomeModals';
import M from 'materialize-css/dist/js/materialize.min.js'; // modals

import { ThemeContext } from '../../context/ThemeContext';
import styled from 'styled-components';

import { Container } from './HomeCSS';

const HomeMain = styled.div`
  background-color: ${(props) => props.bg};
  span {
    color: ${(props) => props.motiveTextColor};
  }
  .container-home__hero--para p::after {
    border-bottom: 2px dashed ${(props) => props.motiveTextColor};
  }
  .container-home__experience span::before,
  .container-home__experience span::after {
    background-color: ${(props) => props.motiveTextColor};
  }
  .icon-container .desc {
    color: ${(props) => props.motiveTextColor};
  }
`;

const Home = ({ pageLoad, main: { pageLoaded } }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();

    // apply animation to blocks if page loaded
    if (pageLoaded.home) {
      startBlockAnim();
    }

    // eslint-disable-next-line
  }, [loading]);

  const { light, dark, theme } = useContext(ThemeContext);
  const motive = theme.theme.night ? dark : light;

  // Check if not loaded globally.
  if (!pageLoaded.home) {
    loadImageAsync(heroImg)
      .then(() => pageLoad({ ...pageLoaded, home: true }))
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

    io.observe(target);
  };

  // const handleImageLoaded = () => {
  //   setLoading(false);
  // }
  // const handleImageErrored = () => {
  //   setLoading(true);
  // }

  const startBlockAnim = () => {
    document.querySelectorAll('.icon-container').forEach(blockIconsLoad); // apply animation function to each block
    animateBlocks();
  };

  if (pageLoaded.home === true) {
    return (
      <Container background={heroBackground}>
        <div className="home">
          <HomeModals />

          <HomeMain
            className="container-home"
            bg={theme.theme.night ? '#000' : 'rgba(59, 88, 152, 0.7)'}
            motiveTextColor={motive.text}
          >
            <div className="container-home__hero">
              <div className="container-home__hero--img">
                <ReactImageAppear
                  showLoader={false}
                  placeholderStyle={{
                    transition: 'all ease 350ms',
                    backgroundColor: 'black',
                  }}
                  src={heroImg}
                  animation="fadeIn"
                  easing="ease-in"
                  alt=""
                />
              </div>

              <div className="container-home__hero--para">
                <p style={{ color: 'white' }}>
                  There is a long journey behind us, but even longer... ahead.
                </p>
              </div>
            </div>

            <div className="container-home__intro-text">
              <span>
                Welcome to my humble website about traveling. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Praesentium, quia
                voluptates autem modi corporis repellat rerum sed delectus a
                omnis. Adipisci, deserunt molestiae? Veniam suscipit consequatur
                reprehenderit tempora nam consectetur!
              </span>
            </div>

            <div className="container-home__experience">
              <span>MY ADVENTURE GEAR</span>
            </div>

            <HomeSkills />
            <Footer />
          </HomeMain>
        </div>
      </Container>
    );
  } else {
    return (
      <div className="spinner">
        <img src={spinner} alt="" />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  main: state.main,
});
export default connect(mapStateToProps, { pageLoad })(Home);
