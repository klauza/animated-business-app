import React, { Fragment } from 'react';
import chromeImg from '../../../media/hero-imgs/modals/navigation/nav-1.jpeg';
import nodeImg from '../../../media/hero-imgs/modals/navigation/nav-2.jpeg';
import pdfImg from '../../../media/hero-imgs/modals/navigation/nav-3.jpeg';
import rickAstleyImg from '../../../media/hero-imgs/modals/navigation/nav-4.jpeg';

const JavaScriptModal = () => {
  return (
    <Fragment>
      <div className="container pt-5">
        <div className="row">
          <div className="col s12">
            <h4>About GPS navigation</h4>
            <p>
              A GPS device allows you to accurately find your location on a
              digital map. Those designed specifically for outdoor travel are
              often built rugged and weatherproof. Another popular option is to
              use a smartphone with a GPS app, but consider that most phones are
              more fragile so you’ll likely need to protect it with a case.
              Whichever you choose, keep in mind that these gadgets run on
              batteries, so you’ll need to monitor your battery power and
              possibly carry extra batteries.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col s3">
            <img
              className="img-fluid mx-auto d-block w-50"
              src={chromeImg}
              alt=""
            />
          </div>
          <div className="col s3">
            <img
              className="img-fluid mx-auto d-block w-100"
              src={nodeImg}
              alt=""
            />
          </div>
          <div className="col s3">
            <img
              className="img-fluid mx-auto d-block w-100"
              src={pdfImg}
              alt=""
            />
          </div>
          <div className="col s3">
            <img
              className="img-fluid mx-auto d-block w-100"
              src={rickAstleyImg}
              alt=""
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <h4>More about navigating</h4>
            <p>
              Gadgets can be used to alert emergency personnel if you need help
              in the backcountry. When activated in an emergency, they will
              determine your position using GPS and send a message via
              government or commercial satellites.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col s12">
            <h5>Affiliate links</h5>
            <a href="https://www.amazon.com/">See here</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default JavaScriptModal;
