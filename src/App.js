import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/header";
import MovieDetails from "./components/Movie";
import Onboarding from "./components/Onboarding/Onboarding";
import { ROUTES } from "./constants";
import "./App.css";

const { HOME, DETAILS, SETTINGS } = ROUTES;

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path={HOME} element={<Home />} />
          <Route path={DETAILS} element={<MovieDetails />} />
          <Route path={SETTINGS} element={<Onboarding />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
