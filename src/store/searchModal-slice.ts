import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';
import { MovieState } from './movie-slice';

export interface ISearchModalState {
  searchQuery: string;
  showSerchModal: boolean;
  searchResults: MovieState;
}

const initialState: ISearchModalState = {
  searchQuery: '',
  showSerchModal: false,
  searchResults: {
    movies: [],
    total_pages: 0,
    total_results: 0,
    page: 0,
  },
};

const searchModalSlice = createSlice({
  name: 'searchModal',
  initialState,
  reducers: {
    /** setting search query to redux state */
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    /** reseting search query in the state */
    resetSearchQuery(state) {
      state.searchQuery = '';
    },
    /** toggling the search modal */
    toggleSearchModal(state) {
      state.showSerchModal = !state.showSerchModal;
    },
    /** setting search results to redux state */
    setSearchResults(state, action: PayloadAction<MovieState>) {
      state.searchResults = action.payload;
    },
    /** reseting search results in the state */
    clearSearchResults(state) {
      state.searchResults = {
        movies: [],
        total_pages: 0,
        total_results: 0,
        page: 0,
      };
    },
  },
});

export const {
  setSearchQuery,
  resetSearchQuery,
  toggleSearchModal,
  setSearchResults,
  clearSearchResults,
} = searchModalSlice.actions;
export const selectSearchModal = (state: RootState) => state.searchModal;
export const selectSearchQuery = (state: RootState) =>
  state.searchModal.searchQuery;
export const selectShowSearchModal = (state: RootState) =>
  state.searchModal.showSerchModal;
export const selectSearchResults = (state: RootState) =>
  state.searchModal.searchResults;
export default searchModalSlice;
