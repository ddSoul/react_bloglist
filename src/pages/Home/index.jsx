import React, { Component } from 'react';
import Blog from '../Blog';
import Header from '../../components/Header';

class Home extends Component {
    render() {
        return (
            <div>
                <Header ishome={true} title={'dxl'}></Header>
                <Blog></Blog>
            </div>
        );
    }
}

export default Home;