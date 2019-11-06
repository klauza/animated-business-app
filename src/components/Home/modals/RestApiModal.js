import React from 'react';
import restApi from '../../../media/hero-imgs/modals/restapi.png';

const RestApiModal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">

          <h5 className="center pb-2 pt-2 mt-5">representational state transfer and application program interface</h5>

          <p className="center"><strong>API</strong> for a website is a code that allows two software programs to communicate with each another.<br/>
          <strong>REST</strong> is a logical choice for building APIs that allow users to connect and interact with cloud services.<br/>
          the idea behind rest is to represent data and use it to transfer state.</p>

          <div className="row">
            <div className="col-sm-12 col-md-6 pt-5 pb-5 mx-auto d-block ">
              <img className="img-fluid" src={restApi} alt=""/>
            </div>
          </div>

          <table className="table mt-5 mb-5">
          <thead className="thead-light">
            <tr>
              <th scope="row">Operation endpoints</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">GET: retrieve an object</th>
            </tr>
            <tr>
              <th scope="row">POST: create an object</th>
            </tr>
            <tr>
              <th scope="row">PUT: modify / update an object</th>
            </tr>
            <tr>
              <th scope="row">DELETE: delete an object</th>
            </tr>
          </tbody>
        </table>

          
          <div className="center">
            <a href="https://developers.themoviedb.org/3/getting-started/introduction">Example of API</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RestApiModal
