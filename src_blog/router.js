import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Blog from './pages/Blog';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './components/Login';
import AntdHome from './components/AntdHome';

const Router = (
    <div>
        <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/blog' component={Blog}></Route>
            <Route path='/detail' component={Detail}></Route>            
            <Route path='/antd' component={AntdHome}></Route>            

        </Switch>
    </div>
);

export default Router;
