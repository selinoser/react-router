import React, { Component } from 'react';
import '../App.css';

import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

import News from './News';
import Homepage from './Homepage';
import Contact from './Contact';
import Error from './Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul className="navbar">
            <li><NavLink exact to="/">Homepage</NavLink></li>
            <li><NavLink exact to="/news">News</NavLink></li>
            <li><NavLink exact to="/contact">Contact</NavLink></li>
          </ul>
          <br/><br/>
          <Switch>
            <Route path="/" 
              exact 
              component={Homepage}>
            </Route>

            <Route path="/contact" 
              exact 
              component={Contact}>
            </Route>

            <Route path="/news"  
              exact 
              component={News}>
            </Route>

            <Route component={Error}></Route>

          </Switch>
      </div>
   </BrowserRouter>
    );
  }
}

export default App;


