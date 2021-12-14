import React from 'react';
import reactReact from '../../../media/hero-imgs/modals/bag/bag-1.jpeg';
import reactContext from '../../../media/hero-imgs/modals/bag/bag-2.jpeg';
import reactRedux from '../../../media/hero-imgs/modals/bag/bag-3.jpeg';

const ReactModal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h4 className="center pt-5">Bag</h4>
          <p className="center">
            As a travel blogger who likes taking photos while exploring new
            countries as well go off into the wild, and hike around the
            backcountry all the time, I decided to set out on a search for
            camera bags that will keep my camera gear safe and give me the
            flexibility to use it for hiking as well as backpacking.
          </p>
        </div>
      </div>

      <p className="center">
        <strong>
          And I found 3 awesome backpacks I like to recommend today for you.
        </strong>
      </p>

      <div className="row align-items-bottom">
        <div className="col-sm-12 col-md-4 ">
          <a href="https://www.amazon.com/">
            <img
              className="img-fluid mx-auto d-blockw-100 rounded"
              src={reactReact}
              alt=""
            />
            <p className="text-secondary center">see in shop</p>
          </a>
        </div>
        <div className="col-sm-12 col-md-4">
          <a href="https://www.amazon.com/">
            <img
              className="img-fluid mx-auto d-block w-80 rounded"
              src={reactRedux}
              alt=""
            />
            <p className="text-secondary center">see in shop</p>
          </a>
        </div>
        <div className="col-sm-12 col-md-4">
          <a href="https://www.amazon.com/">
            <img
              className="img-fluid mx-auto d-block w-80 rounded"
              src={reactContext}
              alt=""
            />
            <p className="text-secondary center">see in shop</p>
          </a>
        </div>
      </div>

      <hr className="mt-5" />
      <div className="row">
        <div className="col s12">
          <h5>Affiliate links</h5>
          <a href="https://www.amazon.com/">See here</a>
          <br />
          <a href="https://www.amazon.com/">See here</a>
        </div>
      </div>
    </div>
  );
};

export default ReactModal;
