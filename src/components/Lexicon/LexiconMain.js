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
                      <div> - {`<BrowserRouter>`} - using history API (pushState, replaceState and the popstate event), keeps UI in sync with URL. </div>
                      <div> - {`<Router>`} - The low-level interface for all router components. The use-case for it, is to integrate a custom history with a state management library like Redux  </div>
                    </div>
                    <div className="description-main__extended">
                      <span className="span-bold">Virtual DOM</span>
                      <div>ReactJS offers a rendering engine which quickly re-render only those elements that need to be updated</div>
                    </div>
                    <div className="description-main__extended">
                      <span className="span-bold">Component</span>
                      <div>It's independent part of the UI. Each component can embed other components. Each one has its state and API</div>
                    </div>
                    <div className="description-main__extended">
                      <span className="span-bold">Hooks</span>
                      <div>They are just simple JavaScript functions. They are easier to work with and more comfortable to test.</div>
                    </div>
                    <div className="description-main__extended">
                      <span className="span-bold">High-Order Component</span>
                      <div>It's a component which accepts the data in its `props` and passes that data down into its view or nested components. To interact with the component, users trigger actions such as pressing a button and the component responds to that interaction by emitting events</div>
                    </div>

                  </div> 
                </li>

                <li id="javascript"> 
                  <i className="fa fa-leaf"></i> <h5>JavaScript</h5>
                  <div className="description-main content-javascript">
                    
                    <div className="description-main__core">
                      <span>desc</span>
                    </div>

                    <div className="description-main__extended">
                      <span className="span-bold"> a </span>
                      <div> ext </div>
                    </div>
                  
                  </div> 
                </li>

                <li id="redux"> 
                  <i className="fa fa-leaf"></i> <h5>Redux</h5>
                  <div className="description-main content-redux">desc</div> 
                </li>
                
              
            </ul>
          </div>

        </div>

      </div>

    </div>
  )

}

export default LexiconMain
