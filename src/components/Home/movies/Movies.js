import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movies-grid";
import { KEY_CODES } from "../../../constants";
import "./Movies.css";

const Movies = (props) => {
  const [movies, setMovies] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(navigator.onLine);

  const focusSearchButton = (e) => {
    const customSearch = document.getElementById("custom-search");
    // enter key's code
    const { ENTER } = KEY_CODES;
    if ([ENTER].includes(e.keyCode)) {
      e.preventDefault();
      customSearch.click();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keyup", focusSearchButton, false);
    fetchMovies(props.url);

    return () => {
      document.removeEventListener("keyup", focusSearchButton, false);
    };
  }, [props.url]);

  const fetchMovies = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => storeMovies(data))
      .catch((error) => {
        console.log(">> something went wrong : ", error);
        setIsFetching(false);
      });
  };

  const storeMovies = (data) => {
    const movies = data.results.map((result) => {
      const {
        overview,
        vote_count,
        id,
        genre_ids,
        poster_path,
        title,
        vote_average,
        release_date,
      } = result;
      return {
        overview,
        vote_count,
        id,
        genre_ids,
        poster_path,
        title,
        vote_average,
        release_date,
      };
    });

    setMovies(movies);
    setIsFetching(false);
  };

  const orderedMovies = movies || [];

  return (
    <div className="movie-container" main role="main">
      <MovieList key="movies-home" movies={orderedMovies} />
    </div>
  );
};

Movies.propTypes = {
  url: PropTypes.url,
};

export default Movies;
