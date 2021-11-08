import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import { SliderData } from './components/SliderData';

function App( slides={SliderData}) {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/explore" exact component={Explore}/>
        </Switch>
      </Router> 
    </>
  );
}

export default App;
