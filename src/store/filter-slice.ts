import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

export interface IFilterState {
  genreIds: number[];
  changed: boolean;
}

const initialState: IFilterState = {
  genreIds: [],
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
      state.changed = true;
    },
    clearAllFilters(state) {
      state.genreIds = [];
      state.changed = false;
    },
  },
});

export const { setGenre, clearGenre, clearAllFilters } = filterSlice.actions;
export const selectGenres = (state: RootState) => state.filter.genreIds;
export default filterSlice;
