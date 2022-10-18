import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

export interface IFilterYear {
  value: string;
  hasChanged: boolean;
}
export interface IFilterState {
  genreIds: number[];
  year: IFilterYear;
  minVoteAverage: number;
  minVoteCount: number;
  changed: boolean;
}

const initialState: IFilterState = {
  genreIds: [],
  year: {
    value: '',
    hasChanged: false,
  },
  minVoteAverage: 0,
  minVoteCount: 0,
  changed: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setGenre(state, action: PayloadAction<number>) {
      const newGenreId = action.payload;
      const existingGenreIds = state.genreIds.find(
        (genreId) => genreId === newGenreId
      );
      if (!existingGenreIds) {
        state.genreIds.push(newGenreId);
        state.changed = true;
      } else {
        state.genreIds = state.genreIds.filter(
          (genreId) => genreId !== newGenreId
        );
        state.changed = true;
      }
    },
    clearGenre(state) {
      state.genreIds = [];
    },
    setYear(state, action: PayloadAction<IFilterYear>) {
      state.year = action.payload;
      state.changed = true;
    },
    clearYear(state) {
      state.year = {
        value: '',
        hasChanged: false,
      };
    },
    setMinVoteAverage(state, action: PayloadAction<number>) {
      state.minVoteAverage = action.payload;
      state.changed = true;
    },
    clearMinVoteAverage(state) {
      state.minVoteAverage = 0;
    },
    setMinVoteCount(state, action: PayloadAction<number>) {
      state.minVoteCount = action.payload;
      state.changed = true;
    },
    clearMinVoteCount(state) {
      state.minVoteCount = 0;
    },
    clearAllFilters(state) {
      state.genreIds = [];
      state.changed = false;
    },
  },
});

export const {
  setGenre,
  clearGenre,
  setYear,
  clearYear,
  setMinVoteAverage,
  clearMinVoteAverage,
  setMinVoteCount,
  clearMinVoteCount,
  clearAllFilters,
} = filterSlice.actions;
export const selectGenres = (state: RootState) => state.filter.genreIds;
export const selectYear = (state: RootState) => state.filter.year;
export const selectMinVoteAverage = (state: RootState) =>
  state.filter.minVoteAverage;
export const selectMinVoteCount = (state: RootState) =>
  state.filter.minVoteCount;
export default filterSlice;
