import React from "react";
import { Card, Grid, Loader, Placeholder, Image, Segment } from 'semantic-ui-react';
import MovieListPlaceholder from '../../containers/home-list-placeholder';
import MovieListItem from "./MovieListItem";
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

    componentDidMount() {
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
            <div className="movie-container">
                <i class="fas fa-search fa-2x search" onClick={this.props.onClick}></i>
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
}

export default Movies;