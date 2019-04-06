import React from "react";
import { Card, Loader } from 'semantic-ui-react';
import MovieListItem from "./MovieListItem";
import { KEY_CODES } from '../../constants';
import MovieListPlaceholder from '../../containers/home-list-placeholder';

import "./Movies.css";

const GridGroup = ({ isFetching, movies }) => {
    if (isFetching) {
        return <MovieListPlaceholder />;
    }

    return (
        <Card.Group itemsPerRow={4} doubling>
            { !!movies && movies.map(movie => (
                            <MovieListItem key={movie.id} movie={movie} />
                        ))
            }
        </Card.Group>
    )

}

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isFetching: true
        };
        this.storeMovies = this.storeMovies.bind(this);
    }

    focusSearchButton = (e) => {
        const customSearch = document.getElementById("custom-search");
        // enter key's code
        const { ENTER } = KEY_CODES;
        if ([ENTER].includes(e.keyCode)) {
            e.preventDefault();
            customSearch.click();
        }
    }

    componentDidMount() {
        document.addEventListener("keyup", this.focusSearchButton, false);
        this.fetchMovies(this.props.url);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.url !== nextProps.url) {
            this.setState({ isFetching: true });

            this.fetchMovies(nextProps.url);
        }
    }

    fetchMovies = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => this.storeMovies(data))
            .catch(error => console.log(error));
    };

    storeMovies = data => {
        const movies = data.results.map( result => {
            const  { overview, vote_count, id, genre_ids, poster_path, title, vote_average, release_date } = result;
            return { overview, vote_count, id, genre_ids, poster_path, title, vote_average, release_date };
        });

        this.setState({ movies , isFetching: false});
    };

    render() {
        const { isFetching } = this.state;
        const orderedMovies = this.state.movies || [];
        return (
            <div className="movie-container" main role="main">
                { false && <ul className="movies">
                    {isFetching && <Loader active={isFetching} inline="centered" /> }
                    {!isFetching &&
                        !!orderedMovies && orderedMovies.map(movie => (
                            <MovieListItem key={movie.id} movie={movie} />
                        ))
                    }
                </ul>
                }
                <GridGroup
                    isFetching={isFetching}
                    movies={orderedMovies}
                />
            </div>
        )
    }

    componentWillUnmount() {
        // select event listener added for custom search button
        document.removeEventListener('keyup', this.focusSearchButton, false);
    }
}

export default Movies;