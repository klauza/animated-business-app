import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Portfolio from './components/layout/Portfolio';
import Github from './components/layout/Github';
import NotFound from './components/layout/NotFound';

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
            <Route path='/github' component={Github} />
            <Route path='/github' component={Github} />
            
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
