import axios from 'axios';
import { IFilterState } from './filter-slice';
import { AppDispatch } from './index';
import { setMovies } from './movie-slice';
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
      dispatch(setMovies(data));
    } catch (error) {
      console.log(error);
    }
  };
};
