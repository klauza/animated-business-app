import React from 'react';
import htmlImage from '../../../media/hero-imgs/modals/fire/stove.jpeg';

const HtmlModal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h4 className="center mt-5">Fire, Stove</h4>
          <p className="center pt-3 pb-3">
            In case of an emergency, you need to have reliable supplies with you
            for starting and maintaining a fire. For many people, this is a
            disposable butane lighter, but matches are also suitable so long as
            they are waterproof or stored in a waterproof container.
            Convenience-store matchbooks are often too flimsy and poorly
            constructed to be trusted for wilderness use.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-10 col-lg-8 mx-auto d-block">
          <img className="img-fluid mx-auto d-block" src={htmlImage} alt="" />
        </div>
      </div>

      <p className="center">
        For outings where firewood is not available, such as trips above tree
        line and/or on snow, a stove is recommended as an emergency heat and
        water source.
      </p>

      <h5 className="center pt-4">Firestarter</h5>
      <p className="center">
        Firestarter, as the name implies, is an element that helps you
        jump-start a fire and is indispensable in wet conditions. The ideal
        firestarter ignites quickly and sustains heat for more than a few
        seconds. Options include dry tinder tucked away in a plastic bag,
        candles, priming paste, heat “nuggets” (chipped-wood clusters soaked in
        resin) and even lint trappings from a household clothes dryer.
      </p>
    </div>
  );
};

export default HtmlModal;
