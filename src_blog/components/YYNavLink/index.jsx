import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class componentName extends Component {
    render() {
        return (
            <NavLink {...this.props}/>
        )
    }
}
