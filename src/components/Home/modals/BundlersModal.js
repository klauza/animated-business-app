import React from 'react';
import webpackImage from '../../../media/hero-imgs/modals/firstaid/medkit.jpeg';

const BundlersModal = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12">
          <h4 className="center">First-aid</h4>
          <p className="pt-3 pb-3">
            It’s vital to carry and know how to use the items in a first-aid
            kit. Pre-assembled first-aid kits take the guesswork out of building
            your own, though many people personalize these kits to suit
            individual needs. Any kit should include treatments for blisters,
            adhesive bandages of various sizes, several gauze pads, adhesive
            tape, disinfecting ointment, over-the-counter pain medication, pen
            and paper. Nitrile gloves should also be included.
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
              <img className="img-fluid" src={webpackImage} alt="" />
            </div>
          </div>
          <hr />
          <p className="pt-3">
            The length of your trip and the number of people involved will
            impact the contents of your kit. It's also a good idea to carry some
            sort of compact guide to dealing with medical emergencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BundlersModal;
