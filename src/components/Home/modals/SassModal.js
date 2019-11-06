import React from 'react';
import sassImage1 from '../../../media/hero-imgs/modals/sass1.jpg';
import sassImage2 from '../../../media/hero-imgs/modals/sass2.jpg';
import sassIcon from '../../../media/hero-imgs/modals/sass.png';

const SassModal = () => {
  return (
    <div className="container">
      <div className="row">

        <div className="col-sm-12 col-md-6 pt-5">
          <h4 className="center">Sass</h4>
          <hr/>
          <p>Sass is a preprocessor scripting language. It extends CSS by providing several mechanisms available in more traditional programming languages, particularly object-oriented languages, but that are not available to CSS3 itself.</p>
          <p><strong>Sass is an awesome tool</strong>. Right after getting to know it in almost every project, I immediately started to use it. It's very accessible, intuitive and easy to work with.</p>

          <p>What I like in Sass is that you can make loops, global variables to settle colors or font styles, you can set mixins for media queries and many more solutions which are so easy to access later in the code. I feel like Sass is extremely fluid and makes CSS a lot easier.</p>

          <img className="img-fluid mt-5 mx-auto d-block w-50" src={sassIcon} alt=""/>
        </div>

        <div className="col-sm-12 col-md-6 pt-5">
          <img className="img-fluid border mx-auto d-block" src={sassImage1} alt=""/>
          <img className="img-fluid mt-2 border mx-auto d-block" src={sassImage2} alt=""/>
        </div>

      </div>

      <hr className="mt-5" />
      <div className="row">
        <div className="col s12">
          <h5>External links</h5>
          <a href="https://sass-lang.com/">Sass</a>
        </div>
      </div>

    </div>
  )
}

export default SassModal;
