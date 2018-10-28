import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CircleSpinner from '../../components/CircleSpinner';
import './Movie.css';

const PlaceHolder = props => {
    const {
        genres,
        title: movieName,
        year: releaseYear,
        time: runtime,
        details: overview
    } = props;
    const length = `${runtime} mins`;
    const description = overview;     

    return (
        <div className="phm-details">
            <div className="phm-details-tile">
                <div className="phm-header">
                    <div className="phm-title-tile">
                        <h1>{`${movieName} (${releaseYear})`}</h1> 
                        <section className="genres">
                                {
                                    genres && genres.map((genre, index) => (
                                        <div key={genre.id}>
                                            <span>{genre.name}</span>
                                        </div>
                                    ))
                                }
                            </section>
                    </div>
                    <div className="phm-time">
                        <i class="fas fa-clock fa-1g"></i>
                        <span>{length}</span>
                    </div>
                </div>
                <span>{description}</span>
            </div>
        </div>
    );
};
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movie: {}
        }
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=651925d45022d1ae658063b443c99784&language=en-US`;
        fetch(movieUrl)
            .then(response => response.json())
            .then(data => this.setState({ movie: data, isLoading: false }))
            .catch(err => console.log("error:", err));
    }

    render() {
        const { isLoading, movie } = this.state;
        const {
            title,
            backdrop_path,
            release_date,
            genres,
            overview,
            vote_average,
            runtime
        } = movie;

        const releaseYear = release_date ? release_date.substring(0 ,4) : null;
        const imgUrl = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;
        const backgroundStyle = {
            backgroundImage: `url(${imgUrl})`
        };

        return (
            <div className="movie-page">
            {
                isLoading
                    ? <CircleSpinner isFetching={isLoading} />
                    : <div className="movie-page">
                        <div className="movie-backdrop" style={backgroundStyle} />
                        <PlaceHolder
                            title={title}
                            year={releaseYear}
                            genres={genres}
                            time={runtime}
                            details={overview}
                        />
                      </div>
            }
                <Link to={`/`} className="go-back">
                    <i class="fas fa-arrow-circle-left fa-2x"></i>
                </Link>
            </div>
        );
    }
}

class Movie1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movie: {}
        }
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=651925d45022d1ae658063b443c99784&language=en-US`;
        fetch(movieUrl)
            .then(response => response.json())
            .then(data => this.setState({ movie: data, isLoading: false }))
            .catch(err => console.log("error:", err));
    }

    render() {
        const { isLoading, movie } = this.state;
        const {
            title,
            backdrop_path,
            release_date,
            genres,
            overview,
            vote_average,
            runtime
        } = movie;

        const releaseYear = release_date ? release_date.substring(0 ,4) : null;
        const imgUrl = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;
        console.log(">> imageUrl :", imgUrl);
        const backgroundStyle = {
            backgroundImage: `url(${imgUrl})`
        };

        return (
            <div className="movie-page">
            {
                isLoading
                    ? <div> getting data ... </div>
                    : <div className="movie-page">
                        <div className="movie-backdrop" style={backgroundStyle} />
                        <placeholder />
                        <div className="movie-details">
                            <h1>
                                {title}
                                <span>({releaseYear})</span>
                            </h1>
                            <section className="genres">
                                {
                                    genres && genres.map((genre, index) => (
                                        <div key={genre.id}>
                                            <span>{genre.name}</span>
                                            {index < genres.length - 1 && (
                                                <span className="separator"> | </span>
                                            )}
                                        </div>
                                    ))
                                }
                            </section>
                            <h5>
                                Runtime:
                                <span> {`${runtime} mins`} </span>
                            </h5>
                            <h4>Overview</h4>
                            <p>{overview}</p>
                        </div>
                      </div>
            }
            </div>
        );
    }
}

export default Movie;