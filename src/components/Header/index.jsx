import React, { Component } from 'react';
import './index.css'

class Hedaer extends Component {

    state = {
        title:'dxl的博客',
        ishome:true
    }

    componentDidMount() {
        console.log('导航啦===',this.props);
        this.setState(this.props);
    }
    
    render() {
        const { title,ishome } = this.state
        return (
            <div className='nav_item'>
                {
                    ishome?(
                        <div className='nav_item_title'>{title}</div>
                    ):(
                        <div className='nav_item_back' onClick={this.props.back}>《 {title}</div>
                    )
                }
                {/* {
                    ishome? <div></div>:<div className='nav_item_back' onClick={this.props.back}>《</div>
                }
                <div className='nav_item_title'>{title}</div> */}
            </div>
        );
    }
}

export default Hedaer;