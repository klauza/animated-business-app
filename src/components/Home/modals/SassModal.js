import React from 'react';
import sassImage1 from '../../../media/hero-imgs/modals/tent/tent-2.jpeg';
import sassImage2 from '../../../media/hero-imgs/modals/tent/tent-3.jpeg';
import sassIcon from '../../../media/hero-imgs/modals/tent/tent-1.jpeg';

const SassModal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 pt-5">
          <h4 className="center">Tent</h4>
          <hr />
          <p>
            Always carry some type of emergency shelter to protect you from wind
            and rain in case you get stranded or injured on the trail. Options
            include an ultralight tarp, a bivy sack, an emergency space blanket
            (which packs small and weighs just ounces) or even a large plastic
            trash bag. It’s important to understand that your tent is only your
            emergency shelter if you have it with you at all times (a tent left
            behind at your camp is not sufficient).
          </p>
          <p>
            That moment when you unzip your tent fly and peel back the door to
            reveal an awe-inspiring landscape is the essence of why I go
            backpacking. Throw in a steaming cup of coffee and I think you have
            just stumbled across the meaning of life my friends…
          </p>

          <p>
            Having your own shelter in the form of an awesome tent is an
            ESSENTIAL tool of the trade for any budget backpacking trip.
            Traveling with a great tent is very important for a variety of
            reasons.
          </p>

          <img
            className="img-fluid mt-5 mx-auto d-block w-50"
            src={sassIcon}
            alt=""
          />
        </div>

        <div className="col-sm-12 col-md-6 pt-5">
          <img
            className="img-fluid border mx-auto d-block"
            src={sassImage1}
            alt=""
          />
          <img
            className="img-fluid mt-2 border mx-auto d-block"
            src={sassImage2}
            alt=""
          />
        </div>
      </div>

      <hr className="mt-5" />
      <div className="row">
        <div className="col s12">
          <h5>Affiliate links</h5>
          <a href="https://www.amazon.com/">See here</a>
        </div>
      </div>
    </div>
  );
};

export default SassModal;
