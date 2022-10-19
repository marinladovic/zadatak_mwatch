import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterResult, IMovie } from '../typings';
import type { RootState } from './index';

export interface MovieState {
  movies: IMovie[];
  total_pages: number;
  total_results: number;
  page: number;
}

const initialState: MovieState = {
  movies: [],
  total_pages: 0,
  total_results: 0,
  page: 0,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    /** setting filtered movies to the state */
    setMovies(state, action: PayloadAction<IFilterResult>) {
      const { page, results, total_pages, total_results } = action.payload;
      state.movies = results;
      state.page = page;
      state.total_pages = total_pages;
      state.total_results = total_results;
    },
    /** adding subsequent pages to the state */
    addMovies(state, action: PayloadAction<IFilterResult>) {
      const { page, results, total_pages, total_results } = action.payload;
      state.movies = [...state.movies, ...results];
      state.page = page;
      state.total_pages = total_pages;
      state.total_results = total_results;
    },
    /** reseting the movie state */
    clearMovies(state) {
      state.movies = [];
      state.page = 0;
      state.total_pages = 0;
      state.total_results = 0;
    },
  },
});

export const { setMovies, addMovies, clearMovies } = movieSlice.actions;
export const selectFilteredMovies = (state: RootState) => state.movie;
export const selectMovies = (state: RootState) => state.movie.movies;
export default movieSlice;
