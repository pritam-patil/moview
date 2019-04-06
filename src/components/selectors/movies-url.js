import { createSelector }  from 'reselect';
import { DEFAULT_FILTERS, MOVIE_GENRES } from '../../constants';

const {
  GENRE: DEFAULT_GENRE,
  MIN_YEAR,
  MAX_YEAR,
  MIN_RATING,
  MAX_RATING,
  MIN_TIME_MINS,
  MAX_TIME_MINS
} = DEFAULT_FILTERS;

const defaultGenreSelector = state => state.genre === DEFAULT_GENRE;

const genreSelector = state => MOVIE_GENRES.find( genre => genre.name === state.genre);

const yearSelector = state => state.year;

const ratingSelector = state => state.rating;

const runTimeSelector = state => state.runtime;

const hasDefaultPreferences = createSelector(
  defaultGenreSelector,
  yearSelector,
  ratingSelector,
  runTimeSelector,
  (
    hasDefaultGenre,
    { value: {min: minYear, max: maxYear}},
    { value: {min: minRating, max: maxRating}},
    { value: {min: minRuntime, max: maxRuntime}}
  ) => {
      if (minYear === MIN_YEAR &&
        maxYear === MAX_YEAR &&
        minRating === MIN_RATING &&
        maxRating === MAX_RATING &&
        minRuntime === MIN_TIME_MINS &&
        maxRuntime === MAX_TIME_MINS
      )
        return hasDefaultGenre && true;
      return false;
  }
);

const moviesLocation = createSelector(
  genreSelector,
  yearSelector,
  ratingSelector,
  runTimeSelector,
  (
    genreId,
    { value: {min: minYear, max: maxYear}},
    { value: {min: minRating, max: maxRating}},
    { value: {min: minRuntime, max: maxRuntime}}
    ) =>
      `https://api.themoviedb.org/3/discover/movie?` +
      `api_key=651925d45022d1ae658063b443c99784&` +
      `language=en-US&sort_by=popularity.desc&` +
      `with_genres=${genreId}&` +
      `primary_release_date.gte=${minYear}-01-01&` +
      `primary_release_date.lte=${maxYear}-12-31&` +
      `vote_average.gte=${minRating}&` +
      `vote_average.lte=${maxRating}&` +
      `with_runtime.gte=${minRuntime}&` +
      `with_runtime.lte=${maxRuntime}&` +
      `page=1&`
);

export { moviesLocation,  hasDefaultPreferences};