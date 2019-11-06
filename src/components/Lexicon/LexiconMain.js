import React from 'react';

const LexiconMain = () => {



  return (
    <div className="lexicon" id="top">
      <h3> Lexicon - the bunker of knowledge </h3>
      <h5>This is my bag of wisdom which I grind and polish</h5>
      <p>Everything is not here, there won't be everything. I just try to place together the most important stuff.</p>

      <div className="lexicon-container">

        <div className="lexicon-container__sticky">
          <div className="lexicon-container__sticky-sidebar">
            <a href="#top" className="goTop">Top <i className="fa fa-arrow-up"></i></a>
            <a href="#react">React</a>
            <a href="#javascript">JavaScript</a>
            <a href="#redux">Redux</a>
        
          </div>
        </div>

        <div className="lexicon-container__grid">

          <div className="lexicon-container__item-list">
            <ul>

                
                <li id="react"> 
                  <i className="fa fa-leaf"></i> <h5>React</h5>
                  <div className="description-main content-react">

                    <div className="description-main__core">
                      <span>It is a rich frontend application</span>
                    </div>

                    <div className="description-main__extended">
                      <span className="span-bold">Routing</span>
                      <div> - {`<Switch>`} - the first matching route will be used</div>
                    </div>

                  </div> 
                </li>

                <li id="javascript"> 
                  <i className="fa fa-leaf"></i> <h5>JavaScript</h5>
                  <div className="content-javascript">desc</div> 
                </li>

                <li id="redux"> 
                  <i className="fa fa-leaf"></i> <h5>Redux</h5>
                  <div className="content-redux">desc</div> 
                </li>
                
              
            </ul>
          </div>

        </div>

      </div>

    </div>
  )

}

export default LexiconMain
