import React, { Component } from 'react';
import Comments from './components/comments/comments';
import usernameData from './components/comments/usernamedata';
import './App.css';

const users = usernameData

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Comments data={users} />
        </header>
      </div>
    );
  }
}

export default App;
