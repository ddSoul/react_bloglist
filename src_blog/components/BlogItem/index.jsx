import React, { Component } from 'react';
import YYNavLink from '../YYNavLink';
import './index.css'

class BlogItem extends Component {
    render() {
        const { icon,title,content } = this.props
        return (
            <div>
                <div className="container">
                    <div>
                        <img className='item_img' src={icon} alt="" />
                    </div>
                    <div>
                        <div className='item_title'>{title}</div>
                        <div className='item_content'>{content}</div>
                        {/* 底部工具栏 */}
                        <div className='item_bottom_tool'>
                            <YYNavLink to={{pathname:"/detail",itemObj:this.props}}>
                                <div className='item_bottom_tool_look'>阅读全文</div>
                            </YYNavLink>   
                        </div>
                    </div>
                </div>
                <div className='item_line'></div>
            </div>
        );
    }
}

export default BlogItem;