import React from 'react';
import htmlImage from '../../../media/hero-imgs/modals/html.png';

const HtmlModal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h4 className="center mt-5"> HTML5</h4>
          <p className="center pt-3 pb-3">HTML is a markup based pattern which defines the behavior of web page content. Is is a language that plays a vital role in defining the appearance of a web page.</p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-sm-12 col-md-10 col-lg-8 mx-auto d-block">
          <img className="img-fluid mx-auto d-block" src={htmlImage} alt=""/>
          <p className="center w-50 mx-auto mt-3"><strong>LocalStorage <br/> Multimedia Elements <br/> Geolocation</strong></p>
        </div>
      </div>

      <p className="center">HTML are not just some opening and closing tags, but also has many more instruments which have changed a lot in 5th version.</p>
      
      <h5 className="center pt-4">HTML5 is browser compatible</h5>
      <p className="center">Modern and popular browsers such as Chrome, Firefox, Safari and Opera support HTML5. In other words, no matter which browser you use, the content will be viewed correctly if all functions and tags are available in those browsers.</p>

    

   

    </div>
  )
}

export default HtmlModal
