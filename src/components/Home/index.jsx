import React, { lazy, Suspense } from 'react';
import MovieListLoader from './placeholder';

const MovieHome = lazy(() => import('./movies'));

const MoviesList = (props) => (
    <Suspense fallback={<MovieListLoader />}>
        <MovieHome {...props} />
    </Suspense>
);

export default MoviesList;
