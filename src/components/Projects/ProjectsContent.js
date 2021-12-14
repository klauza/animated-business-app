import React, { useContext } from 'react';
// import jqueryPng from '../../media/jquery.png';
import ReactImageAppear from 'react-image-appear';
import { portfData } from './ProjectsData';

import { ThemeContext } from '../../context/ThemeContext';
import styled from 'styled-components';
// import { Container } from './ProjectsCSS';

// media
import { heroBackground } from '../../media';

// footer
import Footer from '../Footer/Footer';

const PortfolioMain = styled.div`
  background-color: ${(props) =>
    props.isNight ? 'rgb(117, 117, 117)' : 'rgb(90, 90, 90)'};
  h2,
  p {
    /* color: ${(props) => props.motiveTextColor}; */
  }
  p:nth-of-type(2)::after {
    background-color: ${(props) => props.motiveTextColor};
  }
  background: #000;
  z-index: 5;
  .separator {
    /* background-color: ${(props) =>
      props.isNight ? 'rgb(90, 90, 90)' : 'rgb(117, 117, 117)'}; */
    z-index: -1;
    background: url(${(props) => props.background}) repeat;
    filter: brightness(0.5);
  }
`;

export default function Content() {
  const { light, dark, theme } = useContext(ThemeContext);
  const motive = theme.theme.night ? dark : light;

  return (
    <PortfolioMain
      background={heroBackground}
      className="portfolio-page"
      isNight={theme.theme.night}
      motiveTextColor={motive.text}
    >
      <div className="top-h2">
        <h2>
          Portfolio <i className="fas fa-camera-retro"></i>
        </h2>
        <h2>
          Awards <i className="fas fa-star"></i>
        </h2>
        <h2>
          Achievements <i className="fas fa-trophy"></i>
        </h2>
      </div>

      <div className="portfolio-grid">
        {portfData.map((tile) => {
          return (
            <div key={tile.id} className={`card ${tile.cardClass}`}>
              <div className="card-background">
                <ReactImageAppear
                  showLoader={false}
                  placeholderStyle={{
                    transition: 'all ease 350ms',
                    backgroundColor: 'black',
                  }}
                  className="card-background__image"
                  src={tile.image}
                  animation="fadeIn"
                  easing="ease-in"
                  alt=""
                />{' '}
              </div>
              <div className="top-touch"></div>
              <div className="card-description">
                <div className="card-description__title">{tile.title}</div>
                <div className="card-description__language">
                  {tile.language}
                </div>
                <div className="card-description__icon--container">
                  {tile.icons.map((icon, i) => (
                    <div key={i} className="icon-language">
                      <i className={`${icon}`}></i>
                    </div>
                  ))}
                </div>
                <div className="card-description__link">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={tile.live_page}
                  >
                    {tile.completed}
                    <i className="far fa-file"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={tile.github_page}
                  >
                    Link 2<i className="fas fa-link"></i>
                  </a>
                </div>
              </div>
              <div className="card-description__hover--text">
                {tile.description}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
      <div className="separator"></div>

      {/*  
        <div className="portfolio-grid">
          {portfDataTwo.map(tile => {
            return (
          <div key={tile.id} className={`card ${tile.cardClass}`}>
            <div className="card-background"><ReactImageAppear showLoader={false} placeholderStyle={{ transition: "all ease 350ms", backgroundColor: 'black' }} className="card-background__image" src={tile.image} animation="fadeIn" easing="ease-in" alt="" /> </div>  
            <div className="top-touch"></div>
            <div className="card-description">
              <div className="card-description__title">{tile.title}</div>
              <div className="card-description__language">{tile.language}</div>
              <div className="card-description__icon--container">
                {tile.icons.map((icon, i) => <div key={i} className="icon-language"><i className={`${icon}`}></i></div> )}
                {tile.id === 3 ? ( <div className="icon-language"><img src={jqueryPng} alt=""/></div> ) : (null)}
              </div> 
              <div className="card-description__link">
                <a href={tile.live_page}>{tile.completed}<i className="far fa-file"></i></a>
                <a href={tile.github_page}>see code<i className="fab fa-github"></i></a>
              </div>
            </div>
            <div className="card-description__hover--text">{tile.description}</div>
          </div>
          )
          })}

       


        </div>
*/}
    </PortfolioMain>
  );
}
