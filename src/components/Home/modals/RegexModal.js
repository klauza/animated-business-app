import React from 'react';

const RegexModal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h4 className="center mt-5">Clothing</h4>

          <p className="mt-5">
            Conditions can abruptly turn wet, windy or chilly in the backcountry
            or an injury can result in an unplanned night out, so it’s necessary
            to carry extra clothes beyond those required for your trip.
          </p>

          <table className="table mt-5 mb-5">
            <thead className="thead-dark">
              <tr>
                <th scope="row">Examples something extra to bring with you</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">extra socks</th>
              </tr>
              <tr>
                <th scope="row">extra gloves</th>
              </tr>
              <tr>
                <th scope="row">vest</th>
              </tr>
            </tbody>
          </table>

          <p>
            For winter outings, bring insulation for your upper body and legs.
          </p>
          <p>
            Affiliate link <a href="https://www.amazon.com/">See here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegexModal;
