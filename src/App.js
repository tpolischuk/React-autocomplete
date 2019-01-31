import React, { Component } from 'react';
import Comments from './components/comments';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Comments />
        </header>

      </div>
    );
  }
}

export default App;
