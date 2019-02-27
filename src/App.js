import React, { Component } from 'react';
import Navbar from './Navbar';
import SubmitComponent from './SubmitComponent';
import './App.css';

class App extends Component {
  render() {
    return (

          <div>
		  <Navbar />
		  <SubmitComponent />
      </div>
    );
  }
}

export default App;
