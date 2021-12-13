import React from 'react';
import githubPng from '../../../media/hero-imgs/modals/boots/boots-1.jpeg';

const GithubModal = () => {
  return (
    <div className="container">
      <h4 className="center mt-5">Github, created by Linus Trovalds</h4>

      <div className="row mt-5">
        <h5 className="text-left">About github</h5>

        <div className="col-sm-12">
          <p>
            While it definitely depends on the type of trip: if I am doing a lot
            of walking on cobblestones through European streets, a bit of
            exploring outdoor terrain, or hiking through the backcountry: there
            are a few brands of boots and shoes that I am particularly fond of.
          </p>
        </div>

        <div className="text-left mt-5">
          <ul>
            {' '}
            <p>
              <strong>Best tips for beginners:</strong>
            </p>
            <li className="ml-4" style={{ listStyle: 'circle' }}>
              Wear Appropriate Socks
            </li>
            <li className="ml-4" style={{ listStyle: 'circle' }}>
              Try Boots on Later in the Day
            </li>
            <li className="ml-4" style={{ listStyle: 'circle' }}>
              Take a Walk Around the Store
            </li>
            <li className="ml-4" style={{ listStyle: 'circle' }}>
              Check the Store’s Return Policy
            </li>
          </ul>
        </div>
      </div>

      <div className="col-sm-12 col-md-8 pt-5 pb-5">
        <img className="img-fluid mx-auto d-block" src={githubPng} alt="" />
      </div>

      <hr className="mt-5" />
      <div className="row">
        <div className="col s12">
          <h5>Affiliate links</h5>
          <a href="https://github.community/">See here</a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default GithubModal;
