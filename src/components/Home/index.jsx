import React, { lazy, Suspense } from "react";
import MovieListLoader from "./placeholder";
import LocalStorageManager from "../../store/localStorage";

const MovieHome = lazy(() => import("./movies"));

const MoviesList = (props) => {
  const preferences = new LocalStorageManager("preferences");

  return (
    <Suspense fallback={<MovieListLoader />}>
      <MovieHome {...props} />
    </Suspense>
  );
};

export default MoviesList;
