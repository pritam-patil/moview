import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/header";
import MovieDetails from "./components/Movie";
import Onboarding from "./components/Onboarding/Onboarding";
import "./App.css";

const App = (props) => {
  return (
    <>
      <Header key="moview-header" />
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/movies"
              render={(props) => <Home {...props} />}
            />
            <Route
              path="/movies/:movieId"
              render={(props) => <MovieDetails {...props} />}
            />
            <Route
              path="/onboard"
              render={(props) => <Onboarding {...props} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
