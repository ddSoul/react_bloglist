import React, { Component } from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';

import Article from './components/Article';
import DF from './components/DF';
import BJY from './components/BJY';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className='header'>
          <li>
            <NavLink exact activeClassName='active' to='/'>李白</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/df'>杜甫</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/bjy'>白居易</NavLink>
          </li>
        </ul>
        <div>
            <Switch>
              <Route exact path='/' component={Article}/>
              <Route exact path='/df' component={DF}/>
              <Route exact path='/bjy' component={BJY}/>
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;