import React, {Fragment} from 'react'

const LexiconList = () => {
  return (
  <Fragment>
    <li id="react" className="item-list-li"> 
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

    <li id="javaScript" className="item-list-li"> 
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

    <li id="redux" className="item-list-li"> 
      <i className="fa fa-leaf"></i> <h5>Redux</h5>
      <div className="description-main content-redux">desc</div> 
    </li>
  </Fragment>
  )
}

export default LexiconList