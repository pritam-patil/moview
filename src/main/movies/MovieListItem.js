import React from "react";
import { Link } from 'react-router-dom';
import "./MovieListItem.css";

const DEFAULT_RATING = 3;
const MAX_INPUT_RATING = 10;
const OUTPUT_RATING = 5;

const MovieRatings = ({ vote_average = DEFAULT_RATING }) => {
    const fiveStars = vote_average * OUTPUT_RATING / MAX_INPUT_RATING;
    const fraction = OUTPUT_RATING - fiveStars;
    let fullStars = [];

    for (let i=0; i < Math.floor(fiveStars); i++) {
        fullStars.push(<i key={fiveStars} class="fas fa-star fa-xs"></i>);
    }

    if (fraction) {
        fullStars.push(<i key={fiveStars +1} class="fas fa-star-half fa-xs"></i>)
    }

    return (
        fullStars
    )
}

const MovieListItem = ({ movie={} }) => {
    const {
        id,
        title,
        poster_path,
        release_date,
        overview,
        vote_average,
        vote_count
    } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    const year = release_date && release_date.substring(0, 4);

    return (
        <li className="movie-poster">
            <Link to={`/movies/${id}`} className="thumbnail">
                <img src={imgUrl} alt={title} />
                <div className="second-layer">
                    <div className="movie-details">
                        <div className="average">
                            <MovieRatings vote_average={vote_average} />
                        </div>
                        <div className="year">{year}</div>
                    </div>
                    <div className="more-details">
                        <div className="overview">{overview}</div>
                    </div>
                </div>
            </Link>
        </li>

    );
};

export default MovieListItem;