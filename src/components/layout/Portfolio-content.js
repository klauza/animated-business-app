import React, {Component} from 'react';
import photographyImg from '../../media/portfolio-imgs/photography.jpg';
import guessNumImg from '../../media/portfolio-imgs/guess-game.jpg';
import actorGameImg from '../../media/portfolio-imgs/actor-game.jpg';
import chestImg from '../../media/portfolio-imgs/chest.jpg';
import heroImg from '../../media/portfolio-imgs/hero-project.jpg';
import petShelterImg from '../../media/portfolio-imgs/petShelter.jpg';
import hussarImg from '../../media/portfolio-imgs/hussar.jpg';
import carDealershipImg from '../../media/portfolio-imgs/car-dealership.jpg';
import churchImg from '../../media/portfolio-imgs/church.jpg';
import jqueryPng from '../../media/jquery.png';
import ReactImageAppear from 'react-image-appear';

export default class Content extends Component{
  
  render(){
    

    return(
      <div id="portfolio-page">

        <div className="portfolio-grid">
          
          <div className="card chest-card">
            <div className="card-background"><ReactImageAppear placeholderStyle={{ backgroundColor: 'black' }} className="card-background__image" src={chestImg} animation="fadeIn" easing="ease-in" alt="" /> </div>  
            <div className="top-touch"></div>
            <div className="card-description">
              <div className="card-description__title">coffer</div>
              <div className="card-description__language">JS state pattern, History API</div>
              <div className="card-description__icon--container">
                <div className="icon-language"><i className="fab fa-js-square"></i></div>
              </div>
              <div className="card-description__link"><a href="https://coffer-klauza.netlify.com">see page<i className="far fa-file"></i></a><a href="https://github.com/klauza/coffer">see code<i className="fab fa-github"></i></a></div>
            </div>

            <div className="card-description__hover--text">This project is a container of any smaller idea. Was made to study JS state.</div>
          </div>
          

          <div className="card actor-card">
            <div className="card-background"><ReactImageAppear placeholderStyle={{ backgroundColor: 'black' }} className="card-background__image" src={actorGameImg} animation="fadeIn" easing="ease-in" alt="" /></div>
            <div className="top-touch"></div>
            <div className="card-description">
              <div className="card-description__title">Actor discovery</div>
              <div className="card-description__language">JS revealing pattern, fetch API, local storage</div>
              <div className="card-description__icon--container">
                <div className="icon-language"><i className="fab fa-js-square"></i></div>
                <div className="icon-language"><i className="fas fa-database"></i></div>
              </div>
              <div className="card-description__link"><a href="https://actor-discovery-klauza.netlify.com/">see page<i className="far fa-file"></i></a><a href="https://github.com/klauza/actorDiscovery">see code<i className="fab fa-github"></i></a></div>
            </div>

            <div className="card-description__hover--text">Actor game where you choose the popular celebrity to win... something.</div>
          </div>

          <div className="card guess-card">
            <div className="card-background"><ReactImageAppear placeholderStyle={{ backgroundColor: 'black' }} className="card-background__image" src={guessNumImg} animation="fadeIn" easing="ease-in" alt="" /></div>
            <div className="top-touch"></div>
            <div className="card-description">
              <div className="card-description__title">guessNumber</div>
              <div className="card-description__language">JS Classes, local storage, Regex</div>
              <div className="card-description__icon--container">
                <div className="icon-language"><i className="fab fa-js-square"></i></div>
                <div className="icon-language"><i className="fas fa-database"></i></div>
              </div>
              <div className="card-description__link"><a href="https://guess-a-number-klauza.netlify.com/">see page<i className="far fa-file"></i></a><a href="https://github.com/klauza/guessNumberGame">see code<i className="fab fa-github"></i></a></div>
            </div>

            <div className="card-description__hover--text">Simply guess a number game. I believe there is no need to explain what to do.</div>
          </div>

          <div className="card hero-card">
            <div className="card-background"><ReactImageAppear placeholderStyle={{ backgroundColor: 'black' }} className="card-background__image" src={heroImg} animation="fadeIn" easing="ease-in" alt="" /></div>
            <div className="top-touch"></div>
            <div className="card-description">
              <div className="card-description__title">heroproject</div>  
              <div className="card-description__language">React, Sass</div>
              <div className="card-description__icon--container">
                <div className="icon-language"><i className="fab fa-react"></i></div>
              </div>
              <div className="card-description__link"><a href="https://hero-project-klauza.firebaseapp.com/signin">see page<i className="far fa-file"></i></a><a href="https://github.com/klauza/heroproject">see code<i className="fab fa-github"></i></a></div>
            </div>

            <div className="card-description__hover--text">Sign in & create 2d hero with a connection with firebase. You can see others work too.</div>
          </div>


        </div>

        <div className="separator"> 
          <p className="separator-para">Below are... my foundational projects</p>
        </div>

        <div className="portfolio-grid">


          <div className="card photography-card">
            <div className="card-background"><ReactImageAppear placeholderStyle={{ backgroundColor: 'black' }} className="card-background__image" src={photographyImg} animation="fadeIn" easing="ease-in" alt="" /></div>
            <div className="top-touch"></div>
            <div className="card-description">
              <div className="card-description__title">photography</div>
              <div className="card-description__language">HTML, Sass, jQuery</div>
              <div className="card-description__icon--container">
                <div className="icon-language"><i className="fab fa-html5"></i></div>
                <div className="icon-language"><i className="fab fa-sass"></i></div>
                <div className="icon-language"><i className="fab fa-js-square"></i></div>
              </div>
              <div className="card-description__link"><a href="https://photography-klauza.netlify.com/">see page<i className="far fa-file"></i></a><a href="https://github.com/klauza/photography">see code<i className="fab fa-github"></i></a></div>
            </div>

            <div className="card-description__hover--text">Hobbystic photography SPA with some jQuery DOM manipulation.</div>
          </div>


          <div className="card shelter-card">
            <div className="card-background"><ReactImageAppear placeholderStyle={{ backgroundColor: 'black' }} className="card-background__image" src={petShelterImg} animation="fadeIn" easing="ease-in" alt="" /></div>
            <div className="top-touch"></div>
            <div className="card-description">
              <div className="card-description__title">pet shelter</div>
              <div className="card-description__language">HTML, Sass</div>
              <div className="card-description__icon--container">
                <div className="icon-language"><i className="fab fa-html5"></i></div>
                <div className="icon-language"><i className="fab fa-sass"></i></div>
              </div>
              <div className="card-description__link"><a href="https://shelter-klauza.netlify.com/">see page<i className="far fa-file"></i></a><a href="https://github.com/klauza/Shelter">see code<i className="fab fa-github"></i></a></div>
            </div>

            <div className="card-description__hover--text">Sass based SPA for people who are keen to be taking care of animals. Made with CSS GRID tool.</div>
          </div>


          <div className="card hussars-card">
            <div className="card-background"><ReactImageAppear placeholderStyle={{ backgroundColor: 'black' }} className="card-background__image" src={hussarImg} animation="fadeIn" easing="ease-in" alt="" /></div>
            <div className="top-touch"></div>
            <div className="card-description">
              <div className="card-description__title">hussars</div>
              <div className="card-description__language">HTML, Sass, jQuery</div>
              <div className="card-description__icon--container">
                <div className="icon-language"><i className="fab fa-html5"></i></div>
                <div className="icon-language"><i className="fab fa-sass"></i></div>
                <div className="icon-language"><img src={jqueryPng} alt=""/></div>
              </div>
              <div className="card-description__link"><a href="https://hussars-klauza.netlify.com/">see page<i className="far fa-file"></i></a><a href="https://github.com/klauza/hussars">see code<i className="fab fa-github"></i></a></div>
            </div>

            <div className="card-description__hover--text">Horse cavalry at the turn of XVI century. One page website with colorful sections.</div>
          </div>

          <div className="card church-card">
            <div className="card-background"><ReactImageAppear placeholderStyle={{ backgroundColor: 'black' }} className="card-background__image" src={churchImg} animation="fadeIn" easing="ease-in" alt="" /></div>
            <div className="top-touch"></div>
            <div className="card-description">
              <div className="card-description__title">Parish church</div>
              <div className="card-description__language">Wordpress</div>
              <div className="card-description__icon--container">
                <div className="icon-language"><i className="fab fa-wordpress"></i></div>
              </div>
              <div className="card-description__link"><a href="https://google.com">see page<i className="far fa-file"></i></a><a href="https://google.com">see code<i className="fab fa-github"></i></a></div>
            </div>

            <div className="card-description__hover--text">Wordpress based page made for a parish church for non commercial purpose.</div>
          </div>

          <div className="card car-dealer-card">
            <div className="card-background"><ReactImageAppear placeholderStyle={{ backgroundColor: 'black' }} className="card-background__image" src={carDealershipImg} animation="fadeIn" easing="ease-in" alt="" /></div>
            <div className="top-touch"></div>
            <div className="card-description">
              <div className="card-description__title">car dealership</div>
              <div className="card-description__language">Wordpress</div>
              <div className="card-description__icon--container">
                <div className="icon-language"><i className="fab fa-wordpress"></i></div>
              </div>
              <div className="card-description__link"><a href="https://klauza-car-dealer.000webhostapp.com/">see page<i className="far fa-file"></i></a><a href="https://github.com/klauza/carDealer">see code<i className="fab fa-github"></i></a></div>
            </div>

            <div className="card-description__hover--text">A modest page for a car workshop to list available cars or just to contact a seller.</div>
          </div>

        </div>



      </div>
    )
  }
}
