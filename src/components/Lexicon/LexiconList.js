import React, {Fragment} from 'react'

const LexiconList = ({reactRef, javascriptRef, reduxRef, mongodbRef, nodejsRef}) => {

  



  return (
  <Fragment>
    <li ref={reactRef} className="item-list-li"> 
      <i style={{color: "green"}} className="fa fa-leaf"></i> <h5>React</h5>
      <div className="description-main content-react">
        <div className="description-main__core">
          <span>It is a rich frontend application for building user interfaces.</span>
          <ul>With react you can
            <li>crate reusable components</li>
          </ul>
        </div>

        <div className="description-main__extended">
          <span className="span-bold">JSX</span>
          <div>React uses JSX which is an extension to ECMAScript. JSX is an XML/HTML-like alternative JS syntax which is then transpiled by Babel to transform it into HTML-like text which then JavaScript is parsing. </div>
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
        <div className="description-main__extended">
          <span className="span-bold">props & state</span>
          <div>- Props are variables, can be used to pass data down to a certain component. Props are immutable</div>
          <div>- State is used to store data in current page. State is an independent variable set inside a component. State is mutable and has worse performance than props.</div>
        </div>


      </div> 
    </li>

    <li ref={javascriptRef} className="item-list-li"> 
      <i className="fa fa-leaf"></i> <h5>JavaScript</h5>
      <div className="description-main content-javascript">
        
        <div className="description-main__core">
          <span>It's a scripting language letting pages to be interactive and dynamic.</span>
        </div>

        <div className="description-main__extended">
          <span className="span-bold">  </span>
          <div>  </div>
        </div>
      
      </div> 
    </li>

    <li ref={reduxRef} className="item-list-li"> 
      <i className="fa fa-leaf"></i> <h5>Redux</h5>
      <div className="description-main content-redux">
        <div className="description-main__core">
          <span>It's a tool for an app that mutates the state and makes two-way state exchange possible between the App and a Store.</span>
        </div>
        <div className="description-main__extended">
          <span className="span-bold">Store</span>
          <div>It's a place in the memory within the browser where the application keeps its state.</div>
        </div>
        <div className="description-main__extended">
          <span className="span-bold">Redux-Thunk</span>
          <div>It's a synchronization tool. It puts instructions into a queue and makes sure each action is performed one at a time.</div>
        </div>
      </div> 
    </li>

    <li ref={mongodbRef} className="item-list-li"> 
      <i className="fa fa-leaf"></i> <h5>MongoDB</h5>
      <div className="description-main content-mongodb">
        <div className="description-main__core">
          <span>It's a document database. Can be hosted in the cloud.</span>
        </div>
        <div className="description-main__extended">
          <span className="span-bold">mongoose</span>
          <div>It allows to manage relationships between data and provides schema which defines the structure of document, validations, and default values.</div>
        </div>
      </div> 
    </li>

    <li ref={nodejsRef} className="item-list-li"> 
      <i className="fa fa-leaf"></i> <h5>node.js</h5>
      <div className="description-main content-nodejs">
        <div className="description-main__core">
          <span>node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.</span>
        </div>
        <div className="description-main__extended">
          <span className="span-bold">Express.js</span>
          <div>It is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It enables easy API development.</div>
        </div>
      </div> 
    </li>


  </Fragment>
  )
}

export default LexiconList