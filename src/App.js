import React, { Component } from 'react';
import './App.css';
import './style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Portfolio from './components/layout/Portfolio';
import Skills from './components/layout/Skills';
import Github from './components/layout/Github';

class App extends Component {







  render(){

    

    return (
      
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/skills' component={Skills} />
            <Route path='/github' component={Github} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
