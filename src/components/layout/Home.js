import React from 'react'
import heroImg from '../../media/hero-imgs/hero.jpg'

function Home() {
  return (
    <div className="container-home">

      

      <div className="container-home__hero">
        <img src={heroImg} className="container-home__hero--img" />
        
        <div className="container-home__hero--para">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, vel?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae vero excepturi porro odit minus officiis ex fugiat enim pariatur!</p>
        </div>

      </div>

      <div className="container-home__experience">
        <span>EXPERIENCE</span>
      </div>

      <div className="container-home__skill-icons">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </div>
  )
}

export default Home
