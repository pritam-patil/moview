import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { ITEMS_PER_ROW } from "../../constants";
import MovieListItem from './movie-list-item';

const MoviesGrid = ({ movies }) => {
    return (
        <Card.Group itemsPerRow={ITEMS_PER_ROW} doubling>
        {
            !!movies && movies.map(movie => (
                        <MovieListItem key={movie.id} movie={movie} />
            ))
        }
        </Card.Group>
    )
}

MoviesGrid.propTypes = {
    movies: PropTypes.object.isRequired,
}

export default MoviesGrid;
