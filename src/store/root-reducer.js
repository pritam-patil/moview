import { combineReducers } from 'redux';
import moviesReducer from './reducers';

export const rootReducer = combineReducers(
  moviesReducer
);