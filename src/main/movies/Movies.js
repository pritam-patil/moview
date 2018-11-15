import React from "react";
import MovieSpinner from '../../components/CircleSpinner';
import MovieListItem from "./MovieListItem";
import styles from '../../header/header.css';
import "./Movies.css";

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
                <ul className="movies">
                    {isFetching && <MovieSpinner isFetching={isFetching} /> }
                    {!isFetching &&
                        !!orderedMovies && orderedMovies.map(movie => (
                            <MovieListItem key={movie.id} movie={movie} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Movies;