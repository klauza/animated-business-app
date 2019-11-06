import React from 'react';
import lexiconData from './LexiconData';

const LexiconMain = () => {
  return (
    <div className="lexicon" id="top">
      <h3> Lexicon - the bunker of knowledge </h3>
      <h5>This is my bag of wisdom which I like to grind and polish.</h5>

      <div className="lexicon-container">

        <div className="lexicon-container__sticky">
          <div className="lexicon-container__sticky-sidebar">
            <a href="#top" className="goTop">Top <i className="fa fa-arrow-up"></i></a>
            {lexiconData.map((word, id)=> <a key={id} href={`#${word.id}`}>{word.name}</a>)}
        
          </div>
        </div>

        <div className="lexicon-container__grid">

          <div className="lexicon-container__item-list">
            <ul>

              {lexiconData.map((word, id)=> <li key={id} id={word.id}>{word.name} - {word.description} </li>)}

            </ul>
          </div>

        </div>

      </div>

    </div>
  )
}

export default LexiconMain
