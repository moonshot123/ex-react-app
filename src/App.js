import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container MyComponent">
        <div className="jumbotron">
          Hello react project here!<br/><br/><br/>
          <button type="button" className="btn btn-primary">
            버튼1
          </button><br/><br/>
          <button type="button" className="btn btn-primary">
            버튼2
          </button>
          <button type="button" className="btn btn-primary">
            버튼3
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
