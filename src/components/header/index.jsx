import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./Header"));

const TopbarGrid = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>
  );
};

export default TopbarGrid;
