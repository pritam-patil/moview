import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";
import MovieDetails from "./details";
import People from "./people";
import "./styles.css";

const MovieCard = (props) => {
  const {
    genres,
    people,
    title: movieName,
    year: releaseYear,
    time: runtime,
    details: overview,
    rating,
    posterPath,
  } = props;

  useEffect(() => {
    document.body.style.backgroundImage = "url(" + posterPath + ")";

    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, []);

  return (
    <Card active="true" fluid article="true" role="article">
      <div className="gradient-image">
        <Image src={props.imgUrl} fluid />
        <div className="hero-text">
          <h1>
            {movieName} ({releaseYear})
          </h1>
          <Card.Description className="phm-description">
            {overview}
          </Card.Description>
        </div>
      </div>
      <Card.Content>
        <MovieDetails
          genres={genres}
          time={runtime}
          title={movieName}
          rating={rating}
        />

        <Card.Content extra>
          <People cast={people.cast} crew={people.crew} />
        </Card.Content>
      </Card.Content>
    </Card>
  );
};

MovieCard.defaultProps = {
  people: {
    cast: [],
    crew: [],
  },
};

MovieCard.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  people: PropTypes.shape({
    cast: PropTypes.array,
    crew: PropTypes.array,
  }),
};

export default memo(MovieCard);
