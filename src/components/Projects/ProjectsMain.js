import React, {Component} from 'react';
import Content from './ProjectsContent';

export default class Portfolio extends Component{

  componentDidMount(){
    const selectCards = document.querySelectorAll('.card');
    
    selectCards.forEach((card, index)=>{

      setTimeout(()=>{
        card.style.transform = "translateY(0)";
        card.style.opacity = "1";
        card.style.transition = "ease-out all 250ms";
      }, 150*index);

    })
  }

  render(){
      
    return (
      <Content />
    )
  }
}

