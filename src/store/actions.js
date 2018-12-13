import { MOVIE_FETCH_SUCCESS } from './types';

export function movieFetchSuccess(movies) {
  return {
    type: MOVIE_FETCH_SUCCESS,
    movies
  }
}