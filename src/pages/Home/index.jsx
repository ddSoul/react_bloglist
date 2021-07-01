import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import Blog from '../Blog';
import SliderBar from '../../components/SliderBar';
import './index.css'

class Home extends Component {


    sliderClick = (index) => {
        console.log('点击的index:',index);
    }
    

    render() {
        return (
            <div className='container'>
                <div className="slider-bar">
                     <SliderBar></SliderBar>
                </div>
                <div className="main">
                    <Switch>
                        <Route exact path='/home' component={Blog}></Route>
                        <Route path='/home/swift/:tag' component={Blog}></Route>
                        <Route path='/home/vue/:tag' component={Blog}></Route>
                        <Route path='/home/react/:tag' component={Blog}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;