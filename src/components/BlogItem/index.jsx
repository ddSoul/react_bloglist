import React, { Component } from 'react';
// import YYNavLink from '../YYNavLink';
import './index.css'

class BlogItem extends Component {
    render() {
        const { icon,title,des ,time, look} = this.props
        return (
            <div className="blogitem_container">
                <div className="item_img">
                    <img src={icon} alt="文章图片" />
                </div>
                <div className="item_des">
                    <div className="title">{title}</div>
                    <div className="content">{des}</div>
                    <div className="taginfo">#创建时间：{time}    阅读：{look}</div>
                </div>
            </div>
        );
    }
}

export default BlogItem;