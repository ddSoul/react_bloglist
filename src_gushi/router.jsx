import React from 'react';
import {Switch,Route} from 'react-router-dom';

import App from './App';


const Router = (
    <div>
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route path='/df' component={App}></Route>
            <Route path='/bjy' component={App}></Route>
        </Switch>
    </div>
);

export default Router;