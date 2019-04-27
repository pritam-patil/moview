import React from 'react';
import './styles.css';

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
        fullStars.push(<i key={key} class="fas fa-star fa-xs star"></i>);
    }

    if (fraction) {
        fullStars.push(<i key={getRatingKey(title, 2*fiveStars)} class="fas fa-star-half fa-xs star"></i>)
    }

    return (
        <div
            style={{
                color: 'orange'
            }}>
            { fullStars }
        </div>
    );
};

export default MovieRatings;
