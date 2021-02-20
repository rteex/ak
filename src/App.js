import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

class App extends Component {

  render() {

    console.log("App");

    return (
        <BrowserRouter> 
          <div>
          <h3>App</h3>
            <Main />
          </div>
        </BrowserRouter> 
    );
  }
}

export default App;
