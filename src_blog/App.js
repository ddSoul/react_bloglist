import React, { Component } from 'react';
// import Blog from './pages/Blog';
// import Header from './components/Header';
import {
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div>
          <Header></Header>
          <Blog></Blog>
        </div> */}

          <Link to={{
            pathname:"/detail",
            state:{data:'dic'}
          }}>to Page1</Link>
      </div>
    );
  }
}

export default App;