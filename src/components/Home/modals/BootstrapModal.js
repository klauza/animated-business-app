import React from 'react';
import bootstrapImg from '../../../media/hero-imgs/modals/headlamp/headlamp.jpeg';

const BootstrapModal = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col s12 text-center">
          <h4 className="d-inline-block">Headlamp</h4>
          <span style={also}>but also</span>
          <h4 className="d-inline-block">Torch light</h4>
          <p className="mb-2 mt-2">
            Being able to find your way through the wilderness at night is
            essential, so you always need to have a light source with you. A
            headlamp is the preferred choice of most backcountry travelers
            because it keeps your hands free for all types of tasks, whether
            that’s cooking dinner or holding trekking poles. Always carry extra
            batteries.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col s6 center-align">
          <div className="row align-items-center" style={staticHeight}>
            <div className="col-12 p-0">
              <span className="d-block">
                <strong>Darkness favors injuries</strong>
              </span>
              <i className="material-icons d-block text-success mt-1">
                <h2>color_lens</h2>
              </i>
            </div>
          </div>
          <div className="row align-items-center" style={staticHeight}>
            <div className="col-12 p-0">
              <span className="d-block">
                <strong>Protect yourself and be calm</strong>
              </span>
              <i className="material-icons d-block text-success mt-1">
                <h2>timer</h2>
              </i>
            </div>
          </div>
        </div>

        <div className="col s6 center-align">
          <div className="row align-items-center" style={staticHeight}>
            <div className="col-12 p-0">
              <span className="d-block">
                <strong>Happy ending</strong>
              </span>
              <i className="material-icons d-block text-success mt-1">
                <h2>devices_other</h2>
              </i>
            </div>
          </div>
          <div className="row align-items-center" style={staticHeight}>
            <div className="col-12 p-0">
              <span className="d-block">
                <strong>Headlamp as a key thing</strong>
              </span>
              <i className="material-icons d-block text-success mt-1">
                <h2>sentiment_satisfied_alt</h2>
              </i>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
          <img className="img-fluid" src={bootstrapImg} alt="" />
        </div>
      </div>

      <hr className="mt-5" />
      <div className="row">
        <div className="col s12">
          <h5>Affiliate links</h5>
          <a href="https://www.amazon.com/">See here</a>
          <br />
        </div>
      </div>
    </div>
  );
};
const staticHeight = {
  height: '150px',
  margin: 'auto',
};

const also = {
  display: 'inlineBlock',
  padding: '0 10px',
};

export default BootstrapModal;
