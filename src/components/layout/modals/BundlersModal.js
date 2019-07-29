import React from 'react';
import webpackImage from '../../../media/hero-imgs/modals/webpack.jpg';

const BundlersModal = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12">

          <h4 className="center">Webpack</h4>
          <p className="pt-3 pb-3">Webpack is a module bundler. It takes disparate dependencies, creates modules for them and bundles the entire network up into manageable output files. This is especially useful for Single Page Applications.</p>
          <p>Since React has Webpack included, it's very important to become familiar with this tool.</p>
          <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
              <img className="img-fluid" src={webpackImage} alt=""/>
            </div>
          </div>
          <hr/>
          <h4 className="mt-5 center">Gulp</h4>
          <p className="pt-3">Gulp is a build tool for compiling and compressing JS/assets, and it does live reload on the browsers. Gulp is an ancestor of Webpack but I use it for smaller applications.</p> 
          <p>Gulp file is basically a file with the set of instructions, which Gulp should do. The file can have a default task or several other tasks to be called from one another.</p>

        </div>
      </div>
    </div>
  )
}

export default BundlersModal
