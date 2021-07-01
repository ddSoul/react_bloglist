import React, { Component } from 'react';
import axios from 'axios';
import BlogItem from '../../components/BlogItem';

class Blog extends Component {

    state = {
        list:[]
    }

    componentDidMount() {
        axios.get('/api1/objectc/list').then(
            res => {
                console.log('博客列表返回的数据',res.data);
                this.setState({list:res.data});
            },
            error => {
                console.log('错误信息',error);
            }
        )
    }

    render() {

        // if(this.props.match.params.tag !== undefined) console.log('不是undefiend');
        // else console.log('xxxxxxxx');
        // console.log('博客列表render,获取到的tag:',this.props.match.params.tag);
        const { list } = this.state
        return (
            list.map((blog)=>{
                return (
                    <BlogItem key={blog.id} {...blog}></BlogItem>
                )
            })
        );
    }
}

export default Blog;