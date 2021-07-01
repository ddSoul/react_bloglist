import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
// import {HashRouter} from "react-router-dom";

import App from './App';
// import Router from './router';


ReactDOM.render(
    <BrowserRouter>
       <App></App>
    </BrowserRouter>,   
    document.getElementById('root')
)

// ReactDOM.render(
//        <App></App>   ,
//     document.getElementById('root')
// )