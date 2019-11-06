import React from 'react';

const RegexModal = () => {
  return (
    <div className="container">
      <div className="row">
      <div className="col s12">
        <h4 className="center mt-5">Regular Expressions</h4>

        <p className="mt-5">Regex is a sequence of characters that define a search pattern. Usually used by string searching algorithms to find a string. <strong>Once regex syntax is learned, can be used in any language: JavaScript, Java, VB, C #, C / C++, Python, Perl, Ruby, Delphi, R, Tcl, and many others</strong></p>
        
        
        
        <table className="table mt-5 mb-5">
          <thead className="thead-dark">
            <tr>
              <th scope="row">Examples of Regex usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">extracting information from any text</th>
            </tr>
            <tr>
              <th scope="row">parsing/replacing strings</th>
            </tr>
            <tr>
              <th scope="row">validation</th>
            </tr>
          </tbody>
        </table>

        <p>I personally like this tool and I've created a project using JavaScript and Regex</p>
        <p>Feel free to see it under <a href="https://pwd-maker-klauza.netlify.com/">this link</a></p>
        
      </div>
      </div>
    </div>
  )
}

export default RegexModal
