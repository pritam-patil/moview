import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoad, Spinner } from '../../components';
import './Movie.css';

const MovieTile = props => {
    const {
        genres,
        title: movieName,
        year: releaseYear,
        time: runtime,
        details: overview
    } = props;
    const length = `${runtime} mins`;

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
                <span>{overview}</span>
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
            runtime
        } = movie;

        const releaseYear = release_date ? release_date.substring(0 ,4) : null;
        const imgUrl = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;

        return (
            <div className="movie-page">
            {
                isLoading
                    ? <Spinner isFetching={isLoading} />
                    : <div className="movie-page">
                        <LazyLoad className="movie-backdrop" url={imgUrl}/>
                        <MovieTile
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

export default Movie;