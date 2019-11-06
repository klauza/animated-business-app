import React from 'react';
import githubPng from '../../../media/hero-imgs/modals/github.png'

const GithubModal = () => {
  return (
    <div className="container">
    <h4 className="center mt-5">Github, created by Linus Trovalds</h4>
    
    <div className="row mt-5">
      <h5 className="text-left">About github</h5>

      <div className="col-sm-12">
        <p>Github is a version control system. It stores project code modification in a repository. It's open-source system, which means everyone can see, download and use anybody's files.</p>
      </div>


      <div className="text-left mt-5">
        <ul> <p><strong>The biggest pros I found on Github after starting to use it:</strong></p>
          <li className="ml-4" style={{"listStyle": "circle"}}>Safe code storage - it's like a well packed container of my knowledge and experience</li>
          <li className="ml-4" style={{"listStyle": "circle"}}>Github community is great, people help each other solving the issues</li>
          <li className="ml-4" style={{"listStyle": "circle"}}>Collaboration with other people. Forking the project and being up to date with code. Github keeps track of all the changes that have been pushed to repo</li>
          <li className="ml-4" style={{"listStyle": "circle"}}>command-line tool - has plenty of commands which are easy to remember and use</li>
        </ul>
      </div>
      
    </div>

   
    <div className="col-sm-12 col-md-8 pt-5 pb-5">
      <img className="img-fluid mx-auto d-block" src={githubPng} alt=""/>
    </div>

    <hr className="mt-5" />
    <div className="row">
      <div className="col s12">
        <h5>External links</h5>
        <a href="https://github.community/">Github community home</a><br/>
        <a href="https://github.com/klauza">My Github page</a><br/>
      </div>
    </div>
 


    </div>
  )
}

export default GithubModal
