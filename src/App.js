import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { isOffline } from './components/selectors/is-offline';
import Home from './components/Home';
import Header from './components/header';
import MovieDetails from './components/Movie';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      offline: isOffline(),
    }
  }

  getDerivedStateFromProps(props) {
    return {
      offline: isOffline(),
    }
  }

  updateConnection = status => {
    console.log(`>> updating offline status to ${status}`);
    this.setState({offline: status})
  }

  componentDidMount() {
    document.addEventListener('offline', () => this.updateConnection(true), false);
    document.addEventListener('online', () => this.updateConnection(false), false);
  }

  componentWillUnmount() {
      document.removeEventListener('offline', () => this.updateConnection(null), false);
      document.removeEventListener('online', () => this.updateConnection(false), false);
  }

  render() {
    const { offline } = this.state;

    return (
        <BrowserRouter>
          <div className="App">
            <Header key='moview-header'/>
            <Switch>
                <Route exact
                  path="/"
                  render={(props) => 
                    <Home
                      offline={offline}
                      {...props} 
                    />
                  }
                />
                <Route
                  path="/movies/:movieId"
                  render={(props) =>
                    <MovieDetails
                      offline={offline}
                      {...props}
                    />
                  }
                />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
