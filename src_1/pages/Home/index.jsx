import React, { Component } from 'react';
import Blog from '../Blog';
// import Header from '../../components/Header';
import SliderBar from '../../components/SliderBar';
import './index.css'

class Home extends Component {
    render() {
        return (
            <div className='container'>
                {/* <Header ishome={true} title={'dxl'}></Header> */}
                <div className="slider-bar">
                    <SliderBar className='slider-bar'></SliderBar>
                </div>
                <div className="main">
                    <Blog className='main'></Blog> 
                </div>
            </div>
        );
    }
}

export default Home;