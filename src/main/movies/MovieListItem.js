import React from "react";
import { Link } from 'react-router-dom';
import LineEllipsis from 'react-lines-ellipsis';
import { Card, Icon } from 'semantic-ui-react';
import { LazyLoad } from '../../components';
import "./MovieListItem.css";

const DEFAULT_RATING = 3;
const MAX_INPUT_RATING = 10;
const OUTPUT_RATING = 5;

const getRatingKey = (title, rating) => `${title}-${rating}`;

const MovieRatings = ({ title, vote_average = DEFAULT_RATING }) => {
    const fiveStars = vote_average * OUTPUT_RATING / MAX_INPUT_RATING;
    const fraction = OUTPUT_RATING - fiveStars;
    let fullStars = [];

    for (let i=0; i < Math.floor(fiveStars); i++) {
        let key = getRatingKey(title, fiveStars + i);
        fullStars.push(<i key={key} class="fas fa-star fa-xs"></i>);
    }

    if (fraction) {
        fullStars.push(<i key={getRatingKey(title, 2*fiveStars)} class="fas fa-star-half fa-xs"></i>)
    }

    return (
        fullStars
    )
};

const CardExampleCardProps = ({title, poster_path, overview, release_date}) => (
    <Card
      header={title}
      meta={release_date}
      description={overview}
    />
);

const MovieListItem = ({ movie={} }) => {
    const {
        id,
        title,
        poster_path,
        release_date,
        overview,
        vote_average,
    } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
    const year = release_date && release_date.substring(0, 4);

    return (
        <li className="movie-poster">
            <Link to={`/movies/${id}`} className="thumbnail">
                <LazyLoad className={"movie-poster-img"} url={imgUrl}/>
                <div className="second-layer">
                    <div className={"title"}>
                      <LineEllipsis
                        text={title}
                        maxLine={3}
                        ellipsis={`...`}
                        trimRight
                        basedOn={'letters'}
                      />
                    </div>
                    <div className="movie-details">
                        <div className="average">
                            <MovieRatings title={title} vote_average={vote_average} />
                        </div>
                        <div className="year">{year}</div>
                    </div>
                    <div className="more-details">
                        <LineEllipsis
                            text={overview}
                            maxLine={4}
                            ellipsis={`...`}
                            trimRight
                            basedOn={'letters'}
                        />
                    </div>
                </div>
            </Link>
        </li>

    );
};

export default MovieListItem;