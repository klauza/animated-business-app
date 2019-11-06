import React from 'react';
import reactReact from '../../../media/hero-imgs/modals/reactreact.jpg';
import reactContext from '../../../media/hero-imgs/modals/reactcontext.jpg';
import reactRedux from '../../../media/hero-imgs/modals/reactredux.jpg';

const ReactModal = () => {
  return (
    <div className="container">

      <div className="row">
        <div className="col s12">
          <h4 className="center pt-5">React</h4>
          <p className="center">React is component based javascript library for creating complex, rich and sophisticated UIs. React is using JSX syntax which is an XML extension to JavaScript that also comes with the full power of ES6</p>
        </div>
      </div>
      
      <p className="center"><strong>I have built few projects with React: mostly using Redux, but tried also Context state management</strong></p>

      <div className="row align-items-center">
          <div className="col-sm-12 col-md-4 ">
            <a href="https://github.com/klauza/heroproject"><img className="img-fluid mx-auto d-block w-100 rounded" src={reactReact} alt=""/>
              <p className="text-secondary center">see on Github</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4">
            <a href="https://github.com/klauza/the-machinery"><img className="img-fluid mx-auto d-block w-100 rounded" src={reactRedux} alt=""/>
              <p className="text-secondary center">see on Github</p>
            </a>
          </div>
          <div className="col-sm-12 col-md-4">
            <a href="https://github.com/klauza/a-keeper-of-contacts"><img className="img-fluid mx-auto d-block w-100 rounded" src={reactContext} alt=""/>
              <p className="text-secondary center">see on Github</p>
            </a>
          </div>
          
      </div>

      <hr className="mt-5" />
      <div className="row">
        <div className="col s12">
          <h5>External links</h5>
          <a href="https://reactjs.org/">Reactjs.org</a><br/>
          <a href="https://redux.js.org/">React Redux</a>
        </div>
      </div>
    </div>
  )
}

export default ReactModal
