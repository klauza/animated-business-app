import React from 'react';
import bootstrapImg from '../../../media/hero-imgs/modals/bootstrap.jpg';


const BootstrapModal = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col s12 text-center">
          <h4 className="d-inline-block">Bootstrap</h4>
          <span style={also}>but also</span>
          <h4 className="d-inline-block">Materialize</h4>
          <p className="mb-2 mt-2">I like these libraries for few reasons, they increase the workflow - you can prioritize time on important tasks that you desire to accomplish. Ready packed tools are great, forms, modals - are just few of many. Responsive layout system is also a big plus from me.</p>
        </div>
      </div>

      <div className="row">
        <div className="col s6 center-align">
          <div className="row align-items-center" style={staticHeight}>
              <div className="col-12 p-0">
                <span className="d-block"><strong>A lot of design-ready choices</strong></span>
                <i className="material-icons d-block text-success mt-1"><h2>color_lens</h2></i>
              </div>
        </div>
        <div className="row align-items-center" style={staticHeight}>
          <div className="col-12 p-0">
            <span className="d-block"><strong>Saves a lot of time</strong></span>
            <i className="material-icons d-block text-success mt-1"><h2>timer</h2></i>
          </div>
        </div>
      </div>

      <div className="col s6 center-align">
        <div className="row align-items-center" style={staticHeight}>
          <div className="col-12 p-0">
            <span className="d-block"><strong>Flexible and scallable on any device</strong></span>
            <i className="material-icons d-block text-success mt-1"><h2>devices_other</h2></i>
          </div>
        </div> 
        <div className="row align-items-center" style={staticHeight}>
          <div className="col-12 p-0">
            <span className="d-block"><strong>Overall score</strong></span>
            <i className="material-icons d-block text-success mt-1"><h2>sentiment_satisfied_alt</h2></i>
          </div>
        </div>
        </div>
      </div> 

      <div className="row">
        <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
          <img className="img-fluid" src={bootstrapImg} alt=""/>
        </div>
      </div>

      <hr className="mt-5" />
      <div className="row">
        <div className="col s12">
          <h5>External links</h5>
          <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">Bootstrap</a><br/>
          <a href="https://materializecss.com/">Materialize</a>
        </div>
      </div>

    </div>
    
  )
}
const staticHeight = {
  height: '150px',
  margin: 'auto'
}

const also = {
  display: "inlineBlock",
  padding: "0 10px"
}

export default BootstrapModal
