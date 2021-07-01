import React, { Component } from 'react';
import Header from '../../components/Header';
// import {withRouter} from 'react-router-dom'
import './index.css'

class Detail extends Component {

    componentDidMount() {
        console.log('详情页面接受的参数：',this.props.location.itemObj.id);
    }
    
    backAction = () => {
        console.log('详情页面回退');
        this.props.history.goBack()
    }
    

    render() {

        const { content, icon ,title} = this.props.location.itemObj

        return (
            <div>
                <Header ishome={false} title={title} back={this.backAction}></Header>
                <div>
                    <img src={icon} alt="" className='blog_detail_img' />
                    <div className='blog_detail_conten'>{content}</div>
                </div>
            </div>
        );
    }
}

export default Detail;