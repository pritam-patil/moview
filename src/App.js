import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./header/header";
import Main from './main/Main';
import './App.css';

const LazyDetails = React.lazy(() => import('./main/movies/Movie'));

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header key='moview-header'/>
              <React.Suspense fallback={<div> Loading ... </div>}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/movies/:movieId" component={LazyDetails} />
                </Switch>
              </React.Suspense>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
