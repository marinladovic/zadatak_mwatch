import axios from 'axios';
import { IFilterState } from './filter-slice';
import { AppDispatch } from './index';
import { setMovies, addMovies } from './movie-slice';
import buildFilterRequest from '../utils/buildFilterRequest';

export const fetchFilteredData = (filter: IFilterState) => {
  return async (dispatch: AppDispatch) => {
    const request = buildFilterRequest(filter);
    const fetchData = async () => {
      const response = await axios(request);

      if (response.status !== 200) {
        throw new Error('Failed to fetch movies.');
      }

      const data = await response.data;
      return data;
    };

    try {
      const data = await fetchData();
      if (filter.page === 1) {
        dispatch(setMovies(data));
      } else {
        dispatch(addMovies(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearFilteredData = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      setMovies({
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
      })
    );
  };
};
