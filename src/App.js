import React from 'react';
import './App.scss';
import { Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// redux
import { Provider } from 'react-redux';
import store from './store';
import history from './history';
//context
import ThemeContextProvider from './context/ThemeContext';

import Navbar from './components/Navigation/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProjectsMain from './components/Projects/ProjectsMain';
import Github from './components/Github/Github';
import LexiconMain from './components/Lexicon/LexiconMain';
import NotFound from './components/NotFound';
import NightMode from './components/NightMode';

//footer
import Footer from './components/Footer/Footer';

import 'materialize-css/dist/css/materialize.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <ThemeContextProvider>
            {/* <NightMode /> */}
            <Navbar />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    in={true}
                    appear={true}
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/projects" component={ProjectsMain} />
                      <Route path="/github" component={Github} />
                      <Route path="/lexicon" component={LexiconMain} />
                      <Route component={NotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
            {/* <Footer /> */}
          </ThemeContextProvider>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
