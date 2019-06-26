import React, { Component } from 'react'
import image from '../../media/about-pc.jpeg'




export default class About extends Component {






  render() {





    return (
  	<section className="about">
      <p className="about__top">Hey there, my name is Michal and I'm glad you came here to see my portfolio. Alright, without further delay I'd like you to read few words about me.</p>	
      <h1 className="about__mid"><span>ABOUT</span></h1>
      <h1 className="about__mid-right"><span>ME</span></h1>
      <p className="about__bottom">Web development was around me for quite a while, but in serious way I started to think about it since 2018. I enjoy coding, struggling with problems, creating something from nothing. The final results provide me phenomenal feelings and injection of positivity. For last period of time I was practicing with React. </p>
      <figure><img src={image} alt="" className="about__image" /></figure>
    </section>
    )
  }
}
