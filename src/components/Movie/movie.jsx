import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    ErrorPage,
    NoConnection,
} from '../common';
import { isOffline } from '../selectors/is-offline';
import MovieCard from './card';
import './styles.css';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movie: {},
            hasError: false,
        }
    }

    fetchMovie = movieId => {
        const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?` +
        `api_key=651925d45022d1ae658063b443c99784` +
        `&language=en-US` +
        '&append_to_response=credits';
        
        fetch(movieUrl)
            .then(response => response.json())
            .then(data => this.setState({ movie: data, isLoading: false }))
            .catch(err => console.log("error:", err));
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        this.fetchMovie(movieId);
    }

    componentDidUpdate(prevProps) {
        const { movieId } = this.props.match.params;
        const { movieId: prevId } = prevProps.match.params;

        if (!_.isEqual(movieId, prevId)) {
            this.fetchMovie(movieId);
        }
    }

    getDerivedStateFromError(error) {
        return {
            hasError: true,
            isLoading: false,
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, isLoading: false });
        console.log(`>> Something went wrong ${JSON.stringify(info)}`);
    }

    render() {
        const { hasError, isLoading, movie } = this.state;
        if (isLoading) {
            return null;
        }

        const {
            backdrop_path,
            credits,
            genres,
            overview,
            release_date,
            runtime,
            title,
            vote_average,
        } = movie;

        const releaseYear = release_date ? release_date.substring(0 ,4) : null;
        const imgUrl = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;

        if (hasError) {
            return <ErrorPage />
        }

        const { offline } = this.props;
        if (offline) {
            return <NoConnection />;
        }

        return (
            <div className="movie-page">
                <MovieCard
                    title={title}
                    year={releaseYear}
                    genres={genres}
                    people={credits}
                    time={runtime}
                    details={overview}
                    imgUrl={imgUrl}
                    rating={vote_average}
                />;
                <Link to={`/`} className="go-back">
                    <i class="fas fa-arrow-circle-left fa-2x"></i>
                </Link>
            </div>
        );
    }
}

Movie.defaultProps = {
    offline: isOffline(),
};

Movie.propTypes = {
    offline: PropTypes.bool,
};

export default Movie;
