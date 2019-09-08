import React, {Fragment} from 'react';
import chromeImg from '../../../media/hero-imgs/modals/chrome.png';
import nodeImg from '../../../media/hero-imgs/modals/node.png';
import pdfImg from '../../../media/hero-imgs/modals/pdf.png';
import rickAstleyImg from '../../../media/hero-imgs/modals/rick.jpg';


const JavaScriptModal = () => {
  return (
    <Fragment>
      <div className="container pt-5">
        <div className="row">
          <div className="col s12">
            <h4>JavaScript - a brief history</h4>
            <p>JavaScript is the most widely used language for client-side scripting of web pages created by Brendan Eich from Netscape. JavaScript enables interactive web pages and is an essential part of web applications. It has APIs for working with text, arrays, dates, regular expressions, and the DOM. JavaScript engines are now embedded in many other types of host software, such as desktop widgets, PDF FormData, in web servers and databases.</p>
          </div>
        </div>
       
        <div className="row align-items-center">
          <div className="col s3">
            <img className="img-fluid mx-auto d-block w-50" src={chromeImg} alt=""/>
          </div>
          <div className="col s3">
            <img className="img-fluid mx-auto d-block w-50" src={nodeImg} alt=""/>
          </div>
          <div className="col s3">
            <img className="img-fluid mx-auto d-block w-50" src={pdfImg} alt=""/>
          </div> 
          <div className="col s3">
           <img className="img-fluid mx-auto d-block w-50" src={rickAstleyImg} alt=""/>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <h4>What I've learnt so far</h4>
            <p>If we want to learn JavaScript, we need to understand the basics of JavaScript and ECMAScriptES - a standard for JavaScript that adds new features.</p>
            <p>I've started to study plain vanilla JavaScript, which means JS without any framework or library. <strong>Arrays, objects, functions, operations on numbers and strings, loops, error handling</strong> are highly familiar to me.</p>
            <p>ES6/+ is not foreign to me, standards such as <strong>.map() .filter() .forEach() or arrow functions and Classes</strong> are pretty straghtforward and understandable, and also truly useful.</p>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col s12">
            <h5>External links</h5>
            <a href="https://developer.mozilla.org/pl/docs/Web/JavaScript">MDN - JavaScript</a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default JavaScriptModal
