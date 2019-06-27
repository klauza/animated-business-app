import React from 'react'


function Portfolio() {
  return (
    <div id="portfolio-page">
      {/* <div className="shadow"></div> */}
      <div className="portfolio-grid">

        <div className="card">
          <div className="card-background"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="top-touch"></div>
          <div className="card-description">
            <div className="card-description__title">coffer</div>
            <div className="card-description__language">JS state pattern, History API</div>
            <div className="card-description__icon"><i className="fa fa-camera-retro"></i></div>
            <div className="card-description__link"><a href="https://google.com">see page</a><a href="https://google.com">see code<i className="fa fa-github"></i></a></div>
          </div>

          <div className="card-description__hover--text">This project is a container of any smaller idea. Was made to study JS state.</div>
        </div>

        <div className="card">
          <div className="card-background"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="top-touch"></div>
          <div className="card-description">
            <div className="card-description__title">taskMission - game</div>
            <div className="card-description__language">JS revealing pattern, fetch API, localStore</div>
            <div className="card-description__icon"><i className="fa fa-camera-retro"></i></div>
            <div className="card-description__link"><a href="https://google.com">see page</a><a href="https://google.com">see code</a></div>
          </div>

          <div className="card-description__hover--text">Actor game where you choose the popular celebrity to win... something.</div>
        </div>

        <div className="card">
          <div className="card-background"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="top-touch"></div>
          <div className="card-description">
            <div className="card-description__title">guessNumber</div>
            <div className="card-description__language">JS Classes, local Storage, Regex</div>
            <div className="card-description__icon"><i className="fa fa-camera-retro"></i></div>
            <div className="card-description__link"><a href="https://google.com">see page</a><a href="https://google.com">see code</a></div>
          </div>

          <div className="card-description__hover--text">Simply guess a number game. I believe there is no need to explain what to do.</div>
        </div>

        <div className="card">
          <div className="card-background"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="top-touch"></div>
          <div className="card-description">
            <div className="card-description__title">heroproject</div>
            <div className="card-description__language">React, Sass</div>
            <div className="card-description__icon"><i className="fa fa-sellsy"></i></div>
            <div className="card-description__link"><a href="https://google.com">see page</a><a href="https://google.com">see code</a></div>
          </div>

          <div className="card-description__hover--text">Very first steps to React, there is firebase used in background. The user can login to create his own 2d hero.</div>
        </div>


      </div>

      <div className="separator"> 
        <p className="separator-para">Some very first projects...</p>
      </div>

      <div className="portfolio-grid">


        <div className="card">
          <div className="card-background"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="top-touch"></div>
          <div className="card-description">
            <div className="card-description__title">photography</div>
            <div className="card-description__language">HTML, Sass, jQuery</div>
            <div className="card-description__icon"><i className="fa fa-camera-retro"></i></div>
            <div className="card-description__link"><a href="https://google.com">see page</a><a href="https://google.com">see code</a></div>
          </div>

          <div className="card-description__hover--text">Hobbystic photography SPA with some jQuery DOM manipulation.</div>
        </div>


        <div className="card">
          <div className="card-background"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="top-touch"></div>
          <div className="card-description">
            <div className="card-description__title">shelter</div>
            <div className="card-description__language">HTML, Sass</div>
            <div className="card-description__icon"><i className="fa fa-comment-o"></i></div>
            <div className="card-description__link"><a href="https://google.com">see page</a><a href="https://google.com">see code</a></div>
          </div>

          <div className="card-description__hover--text">Sass based One page website. Made with great CSS GRID tool.</div>
        </div>


        <div className="card">
          <div className="card-background"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="top-touch"></div>
          <div className="card-description">
            <div className="card-description__title">hussars</div>
            <div className="card-description__language">HTML, Sass, jQuery</div>
            <div className="card-description__icon"><i className="fa fa-pied-piper-alt"></i></div>
            <div className="card-description__link"><a href="https://google.com">see page</a><a href="https://google.com">see code</a></div>
          </div>

          <div className="card-description__hover--text">Horse cavalry at the turn of XVI century. One page website with colorful sections.</div>
        </div>

      </div>

    </div>
  )
}

export default Portfolio
