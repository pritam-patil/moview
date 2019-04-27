import React from "react";
import PropTypes from 'prop-types';
import MovieList from '../movies-grid';
import { KEY_CODES } from '../../../constants';
import "./Movies.css";

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isFetching: navigator.onLine,
            hasError: false,
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

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
        });
    }

    getDerivedStateFromError(error) {
        return ({
            hasError: true,
        });
    }

    componentDidMount() {
        document.addEventListener("keyup", this.focusSearchButton, false);
        this.fetchMovies(this.props.url);
    }

    /* TODO: update in next release */
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.url !== nextProps.url) {
            this.setState({ isFetching: true }, () => this.fetchMovies(nextProps.url));
        }
    }

    errorHandler = response => {
        if (!response.ok) {
            throw Error(response.statureText);
        }

        return response;
    }

    fetchMovies = (url) => {
        fetch(url)
            .then(this.errorHandler)
            .then(response => response.json())
            .then(data => this.storeMovies(data))
            .catch(error => {
                console.log('>> something went wrong : ', error);
                this.setState({ hasError: true });
            });
    };

    storeMovies = data => {
        const movies = data.results.map( result => {
            const  { overview, vote_count, id, genre_ids, poster_path, title, vote_average, release_date } = result;
            return { overview, vote_count, id, genre_ids, poster_path, title, vote_average, release_date };
        });

        this.setState({ movies , isFetching: false});
    };

    render() {
        const orderedMovies = this.state.movies || [];

        return (
            <div className="movie-container" main role="main">
                <MovieList
                    key="movies-home"
                    movies={orderedMovies}
                />
            </div>
        )
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.focusSearchButton, false);
    }
}

Movies.propTypes = {
    url: PropTypes.url,
}

export default Movies;
