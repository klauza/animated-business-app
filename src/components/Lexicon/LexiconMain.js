import React, {useRef} from 'react';
import LexiconList from './LexiconList';

 

const LexiconMain = () => {

  const reactRef = useRef();
  const javascriptRef = useRef();
  const reduxRef = useRef();
  const mongodbRef = useRef();
  const nodejsRef = useRef();
  const htmlRef = useRef();
  const topRef = useRef();

  const executeScroll = (myRef) => scrollToRef(myRef)
  
  const scrollToRef = (ref) => {
    console.log(ref);
    window.scrollTo(0, ref.current.offsetTop+200)
  }

  return (
    <div className="lexicon" ref={topRef} id="top">
      <h3 id="header">Lexicon <span>the bunker of web knowledge</span></h3>
      <h5 id="sub-header">A bag of tech wisdom</h5>
      <p id="paragraph-header">Here, I try to place together the most important stuff.</p>

      <div className="lexicon-container">

        <div className="lexicon-container__sticky">
          <ul className="lexicon-container__sticky-sidebar">
            <li onClick={()=>window.scrollTo(0, 0)} className="goTop">Top <i className="fa fa-arrow-up"></i></li>
            <li onClick={()=>executeScroll(reactRef)}>React</li>
            <li onClick={()=>executeScroll(javascriptRef)}>JavaScript</li>
            <li onClick={()=>executeScroll(reduxRef)}>Redux</li>
            <li onClick={()=>executeScroll(mongodbRef)}>MongoDB</li>
            <li onClick={()=>executeScroll(nodejsRef)}>nodeJS</li>
            <li onClick={()=>executeScroll(htmlRef)}>HTML</li>
          </ul>
        </div>

        <div className="lexicon-container__grid">

          <div className="lexicon-container__item-list">
            <ul className="item-list-ul">

              {/* lexicon list */}
              <LexiconList reactRef={reactRef} javascriptRef={javascriptRef} reduxRef={reduxRef} mongodbRef={mongodbRef} nodejsRef={nodejsRef} htmlRef={htmlRef} />

            </ul>
          </div>

        </div>

      </div>

    </div>
  )

}

export default LexiconMain
