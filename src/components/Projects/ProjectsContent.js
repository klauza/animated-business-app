import React from 'react'; 
// import jqueryPng from '../../media/jquery.png';
import ReactImageAppear from 'react-image-appear';
import {portfData} from './ProjectsData';


export default function Content() {

    
    
    return(
      <div id="portfolio-page">
        <h2>PORTFOLIO</h2>
        <p>sorted by <span>recent first</span></p>
        <p>All projects under <a href="https://www.github.com/klauza?tab=repositories">THIS</a> link</p>
        <div className="portfolio-grid">


        {portfData.map(tile => {
          return (
        <div key={tile.id} className={`card ${tile.cardClass}`}>
          <div className="card-background"><ReactImageAppear showLoader={false} placeholderStyle={{ transition: "all ease 350ms", backgroundColor: 'black' }} className="card-background__image" src={tile.image} animation="fadeIn" easing="ease-in" alt="" /> </div>  
          <div className="top-touch"></div>
          <div className="card-description">
            <div className="card-description__title">{tile.title}</div>
            <div className="card-description__language">{tile.language}</div>
            <div className="card-description__icon--container">
              {tile.icons.map((icon, i) => <div key={i} className="icon-language"><i className={`${icon}`}></i></div> )}
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

        <div className="separator"> 
        </div>
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
      </div>
    )
  
  }