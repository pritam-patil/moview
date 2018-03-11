import React, {Component} from 'react';
import Header from "./header/header";
import Main from './main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
