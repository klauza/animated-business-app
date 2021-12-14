import React from 'react';
import restApi from '../../../media/hero-imgs/modals/knife/knife.jpeg';

const RestApiModal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="center pb-2 pt-2 mt-5">Knife</h3>

          <p className="center">
            When you’re hitting the trail, being prepared can be the difference
            between a good time and a disaster, and all experienced hikers know
            the importance of a good knife. Here are a few things you should
            think about when looking for a hiking knife. the idea behind rest is
            to represent data and use it to transfer state.
          </p>

          <div className="row">
            <div className="col-sm-12 col-md-6 pt-5 pb-5 mx-auto d-block ">
              <img className="img-fluid" src={restApi} alt="" />
            </div>
          </div>

          <table className="table mt-5 mb-5">
            <thead className="thead-light">
              <tr>
                <th scope="row">Other Tips</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Folding knives are easy to carry</th>
              </tr>
              <tr>
                <th scope="row">
                  Fixed-blade knives are durable, tough, and strong.
                </th>
              </tr>
              <tr>
                <th scope="row">
                  Knifes can be helpful on the trail for cutting tough
                  materials.
                </th>
              </tr>
            </tbody>
          </table>

          <div className="center">
            <a href="https://www.amazon.com/">Affiliate link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestApiModal;
