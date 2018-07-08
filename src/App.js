import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./header/header";
import Main from './main/Main';
import Movie from './main/movies/Movie';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header />
              <Switch>
                  <Route exact path="/" component={Main} />
                  <Route path="/movies/:movieId" component={Movie} />
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
