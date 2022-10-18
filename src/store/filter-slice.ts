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
  page: number;
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
  page: 1,
  changed: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setGenre(state, action: PayloadAction<number>) {
      state.page = 1;
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
      state.page = 1;
      state.genreIds = [];
    },
    setYear(state, action: PayloadAction<IFilterYear>) {
      state.page = 1;
      state.year = action.payload;
      state.changed = true;
    },
    clearYear(state) {
      state.page = 1;
      state.year = {
        value: '',
        hasChanged: false,
      };
    },
    setMinVoteAverage(state, action: PayloadAction<number>) {
      state.page = 1;
      state.minVoteAverage = action.payload;
      state.changed = true;
    },
    clearMinVoteAverage(state) {
      state.page = 1;
      state.minVoteAverage = 0;
    },
    setMinVoteCount(state, action: PayloadAction<number>) {
      state.page = 1;
      state.minVoteCount = action.payload;
      state.changed = true;
    },
    clearMinVoteCount(state) {
      state.page = 1;
      state.minVoteCount = 0;
    },
    increasePageIndex(state) {
      state.page = state.page + 1;
    },
    resetPageIndex(state) {
      state.page = 1;
    },
    clearAllFilters(state) {
      state.genreIds = [];
      state.year = {
        value: '',
        hasChanged: false,
      };
      state.minVoteAverage = 0;
      state.minVoteCount = 0;
      state.page = 1;
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
  increasePageIndex,
  resetPageIndex,
  clearAllFilters,
} = filterSlice.actions;
export const selectFilter = (state: RootState) => state.filter;
export const selectGenres = (state: RootState) => state.filter.genreIds;
export const selectYear = (state: RootState) => state.filter.year;
export const selectMinVoteAverage = (state: RootState) =>
  state.filter.minVoteAverage;
export const selectMinVoteCount = (state: RootState) =>
  state.filter.minVoteCount;
export const selectPage = (state: RootState) => state.filter.page;
export default filterSlice;
