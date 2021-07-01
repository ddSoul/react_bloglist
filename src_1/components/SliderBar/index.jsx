import React, { Component } from 'react';
import './index.css'

class SliderBar extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <a href="index" className='logo'>跳海的鱼</a>
                    <div className="info">热爱生活，热爱工作</div>
                </div>

                <div className="nav">
                    <a href="#dddd" className='item'>Object-C</a>
                    <a href="#ddd" className='item'>Swift</a>
                    <a href="#ddd" className='item'>Vue</a>
                    <a href="#ddd" className='item'>React</a>
                </div>

                <div className="taglist">
                    <a href="#ddd" className='item'>@我</a>
                </div>
            </div>
        );
    }
}

export default SliderBar;