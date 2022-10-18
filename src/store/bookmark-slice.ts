import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './index';

export interface IBookmark {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

export interface BookmarkState {
  bookmarks: IBookmark[];
}

const initialState: BookmarkState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    replaceBookmarks(state, action: PayloadAction<IBookmark[]>) {
      state.bookmarks = action.payload;
    },
    addBookmark(state, action: PayloadAction<IBookmark>) {
      state.bookmarks.push(action.payload);
    },
    removeBookmark(state, action: PayloadAction<number>) {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.id !== action.payload
      );
    },
  },
});

export const { replaceBookmarks, addBookmark, removeBookmark } =
  bookmarkSlice.actions;
export const selectBookmarks = (state: RootState) => state.bookmarks.bookmarks;
export default bookmarkSlice;

export const fetchBookmarkData = () => {
  return async (dispatch: AppDispatch) => {
    const localBookmarks = localStorage.getItem('bookmarks');
    if (localBookmarks) {
      const bookmarks = JSON.parse(localBookmarks);
      dispatch(replaceBookmarks(bookmarks));
    } else {
      localStorage.setItem('bookmarks', JSON.stringify([]));
    }
  };
};

export const setBookmarkData = (bookmark: IBookmark) => {
  return async (dispatch: AppDispatch) => {
    const localBookmarks = localStorage.getItem('bookmarks');
    const newBookmark = bookmark;
    if (localBookmarks) {
      const bookmarks = JSON.parse(localBookmarks);
      const existingBookmark = bookmarks.find(
        (bookmark: IBookmark) => bookmark.id === newBookmark.id
      );
      if (!existingBookmark) {
        bookmarks.push(newBookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        dispatch(addBookmark(newBookmark));
      } else {
        const newBookmarks = bookmarks.filter(
          (bookmark: IBookmark) => bookmark.id !== newBookmark.id
        );
        localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
        dispatch(removeBookmark(newBookmark.id));
      }
    } else {
      localStorage.setItem('bookmarks', JSON.stringify([newBookmark]));
      dispatch(addBookmark(newBookmark));
    }
  };
};
