import React, { Component } from 'react';
import BlogItem from '../../components/BlogItem';

class Blog extends Component {

    bloglists = [
        {
            id:1,
            icon:'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0bfff31a51a94549a131485bb79b1953~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:360:240.awebp',
            title:'这是第一篇博客',
            content:'布局的传统解决方案，基于盒状模型，比如，垂直居中就不容易实现,垂直居中就不容易实垂直居中就不容易实垂直居中就不容易实垂直居中就不容易实垂直居中就不容易实垂直居中就不容易实',
            looknumber:99,
        },
        {
            id:2,
            icon:'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0bfff31a51a94549a131485bb79b1953~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:360:240.awebp',
            title:'这是第二篇博客',
            content:'布局的传统解决方案，基于盒状模型，比如，垂直居中就不容易实现',
            looknumber:99,
        },
        {
            id:3,
            icon:'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06814473cdfb41e191beb10d8acca728~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:360:240.awebp',
            title:'这是第三篇博客',
            content:'布局的传统解决方案，基于盒状模型，比如，垂直居中就不容易实现',
            looknumber:99,
        },
        {
            id:4,
            icon:'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0bfff31a51a94549a131485bb79b1953~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:360:240.awebp',
            title:'这是第四篇博客',
            content:'布局的传统解决方案，基于盒状模型，比如，垂直居中就不容易实现',
            looknumber:99,
        },
        {
            id:5,
            icon:'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa4bfb903d8e4ebb9400f78da18153f9~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:360:240.awebp',
            title:'这是第五篇博客',
            content:'布局的传统解决方案，基于盒状模型，比如，垂直居中就不容易实现,布局的传统解决方案，基于盒状模型，比如，垂直居中就不容易实布局的传统解决方案，基于盒状模型，比如，垂直居中就不容易实布局的传统解决方案，基于盒状模型，比如，垂直居中就不容易实布局的传统解决方案，基于盒状模型，比如，垂直居中就不容易实',
            looknumber:99,
        },
    ]

    render() {
        return (
            this.bloglists.map((blog)=>{
                console.log(blog.content);
                return (
                    <BlogItem key={blog.id} {...blog}></BlogItem>
                )
            })
        );
    }
}

export default Blog;