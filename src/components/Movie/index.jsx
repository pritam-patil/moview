import React, { lazy, Suspense } from 'react';
import MovieListLoader from './placeholder';

const Movie = lazy(() => import('./movie'));

const MovieItem = (props) => (
    <Suspense fallback={<MovieListLoader />}>
        <Movie {...props} />
    </Suspense>
);

export default MovieItem;
