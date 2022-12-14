import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter-slice';
import movieSlice from './movie-slice';
import searchModalSlice from './searchModal-slice';
import bookmarkSlice from './bookmark-slice';

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    movie: movieSlice.reducer,
    searchModal: searchModalSlice.reducer,
    bookmarks: bookmarkSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
