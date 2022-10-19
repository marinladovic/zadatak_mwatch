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
    /** setting genre filter to the filter state */
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
    /** clearing genre filter from the filter state */
    clearGenre(state) {
      state.page = 1;
      state.genreIds = [];
    },
    /** setting year filter to the filter state */
    setYear(state, action: PayloadAction<IFilterYear>) {
      state.page = 1;
      state.year = action.payload;
      state.changed = true;
    },
    /** clearing year filter from the filter state */
    clearYear(state) {
      state.page = 1;
      state.year = {
        value: '',
        hasChanged: false,
      };
    },
    /** setting minimum vote average filter to the filter state */
    setMinVoteAverage(state, action: PayloadAction<number>) {
      state.page = 1;
      state.minVoteAverage = action.payload;
      state.changed = true;
    },
    /** clearing minumum vote average filter from the filter state */
    clearMinVoteAverage(state) {
      state.page = 1;
      state.minVoteAverage = 0;
    },
    /** setting minimum vote count filter to the filter state */
    setMinVoteCount(state, action: PayloadAction<number>) {
      state.page = 1;
      state.minVoteCount = action.payload;
      state.changed = true;
    },
    /** clearing minimum vote count filter from the filter state */
    clearMinVoteCount(state) {
      state.page = 1;
      state.minVoteCount = 0;
    },
    /** on load more click, increase the page index */
    increasePageIndex(state) {
      state.page = state.page + 1;
    },
    /** reset the page index on filter change */
    resetPageIndex(state) {
      state.page = 1;
    },
    /** reseting all filters to initial state */
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
