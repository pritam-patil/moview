import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">
            <Header key="moview-header" />
          </NavLink>
          {/* <NavLink to="/movies">
                    Movies
                </NavLink> */}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderLayout;
