import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./Header"));

const TopbarGrid = (props) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            color: "transparent",
          }}
        >
          Loading...
        </div>
      }
    >
      <Header />
    </Suspense>
  );
};

export default TopbarGrid;
