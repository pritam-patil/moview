import { MOVIE_FETCH_SUCCESS } from './types';
import initialState from './initialState';

export default function moviesReducer(state=initialState.movies, action) {
  const { type } = action;

  switch (type) {
    case MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        list: action.movies
      };
    default:
      return state;
  }
}