import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Grid, Header } from "semantic-ui-react";
import { SearchMovie } from "../common";
import { ROUTES } from "../../constants";
import "./styles.css";

const TopbarGrid = (props) => {
  return (
    <header>
      <div className="left">
        <NavLink to={ROUTES.HOME}>
          <i class="fas fa-film fa-4x"></i>
        </NavLink>
        <div>
          <h2>Moview</h2>
          <p>Find the right movie!</p>
        </div>
      </div>
      <div className="right">
        <NavLink to={ROUTES.SETTINGS}>
          <i class="fas fa-cog fa-2x"></i>
        </NavLink>
      </div>
    </header>
  );
};

export default TopbarGrid;
