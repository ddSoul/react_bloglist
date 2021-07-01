import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './index.css'

class SliderBar extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className='logo'>跳海的鱼</div>
                    <div className="info">热爱生活，热爱工作</div>
                </div>

                <div className="nav">
                    <NavLink exact activeClassName='active' to='/home'>
                        <div className='item'>Object-C</div>
                    </NavLink>
                    <NavLink activeClassName='active' to='/home/swift/2'>
                        <div className='item'>Swift</div>
                    </NavLink>
                    <NavLink activeClassName='active' to='/home/vue/3'>
                        <div className='item'>Vue</div>
                    </NavLink>
                    <NavLink activeClassName='active' to='/home/react/4'>
                        <div className='item'>React</div>
                    </NavLink>
                </div>

                <div className="taglist">
                    <div className='item'>@github</div>
                    <div className='item'>@email</div>
                </div>
            </div>
        );
    }
}

export default SliderBar;