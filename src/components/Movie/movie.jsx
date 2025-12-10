import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./card";
import "./styles.css";

const Movie = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const fetchMovie = (movieId) => {
    const movieUrl =
      `https://api.themoviedb.org/3/movie/${movieId}?` +
      `api_key=651925d45022d1ae658063b443c99784` +
      `&language=en-US` +
      "&append_to_response=credits";

    fetch(movieUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch((err) => console.log("error:", err));
  };

  useEffect(() => {
    const { movieId } = props.match.params;
    fetchMovie(movieId);
  }, [props.match.params]);

  if (isLoading) {
    return null;
  }

  const {
    poster_path,
    backdrop_path,
    credits,
    genres,
    overview,
    release_date,
    runtime,
    title,
    vote_average,
  } = movie;

  const releaseYear = release_date ? release_date.substring(0, 4) : null;
  const imgUrl = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;
  const posterPath = `http://image.tmdb.org/t/p/w1280/${poster_path}`;

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
        posterPath={posterPath}
      />
      ;
      <Link to={`/`} className="go-back">
        <i class="fas fa-arrow-circle-left fa-2x"></i>
      </Link>
    </div>
  );
};

export default Movie;
