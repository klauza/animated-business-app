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
            <div className="card-description__title">Photography</div>
            <div className="card-description__language">React HTML CSS</div>
            <div className="card-description__icon"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
            <div className="card-description__link"><a href="#">see page</a><a href="#">see github</a></div>
          </div>
          
        </div>





        <div className="card">
          <div className="image"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="title">Photography</div>
          <div className="language">React</div>
        </div>

        <div className="card">
          <div className="image"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="title">Photography</div>
          <div className="language">React</div>
        </div>

        <div className="card">
          <div className="image"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="title">Photography</div>
          <div className="language">React</div>
        </div>
        
        <div className="card">
          <div className="image"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="title">Photography</div>
          <div className="language">React</div>
        </div>

      </div>

      <div className="separator"> 
        <p className="separator-para">Some very first projects...</p>
      </div>


      <div className="portfolio-grid">
        <div className="card">

          <div className="image"><img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/></div>
          <div className="bot-part">
            <div className="title">Photography</div>
            <div className="language">React</div>
            <div className="link"><a href="#">LINK</a></div>
          </div>
          
        </div>
      </div>


    </div>
  )
}

export default Portfolio
