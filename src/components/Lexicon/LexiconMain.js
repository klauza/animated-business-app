import React from 'react';
import LexiconList from './LexiconList';

const LexiconMain = () => {



  return (
    <div className="lexicon" id="top">
      <h3> Lexicon - the bunker of knowledge </h3>
      <h5>This is my bag of wisdom</h5>
      <p>Everything is not here, and won't be. I try to place together the most important stuff.</p>

      <div className="lexicon-container">

        <div className="lexicon-container__sticky">
          <div className="lexicon-container__sticky-sidebar">
            <a href="#top" className="goTop">Top <i className="fa fa-arrow-up"></i></a>
            <a href="#react">React</a>
            <a href="#javaScript">JavaScript</a>
            <a href="#redux">Redux</a>
        
          </div>
        </div>

        <div className="lexicon-container__grid">

          <div className="lexicon-container__item-list">
            <ul className="item-list-ul">
              
              <LexiconList />

            </ul>
          </div>

        </div>

      </div>

    </div>
  )

}

export default LexiconMain
