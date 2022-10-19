import axios from 'axios';
import { AppDispatch } from '.';
import { setSearchResults } from './searchModal-slice';
import { toast } from 'react-hot-toast';
import { toastStyle_basic } from '../utils/toastStyle';
import { BASE_URL } from '../utils/constants';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

/** Responsible for fetching data according to the search query */
export const fetchSearchData = (searchQuery: string) => {
  return async (dispatch: AppDispatch) => {
    if (searchQuery.length > 0) {
      const request = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
      const fetchData = async () => {
        const response = await axios(request);

        if (response.status !== 200) {
          throw new Error('Failed to fetch results.');
        }

        const data = await response.data;
        return data;
      };

      try {
        const data = await fetchData();
        dispatch(
          setSearchResults({
            movies: data.results,
            total_results: data.total_results,
            total_pages: data.total_pages,
            page: data.page,
          })
        );
      } catch (error) {
        toast(`Something went wrong. ${error}`, {
          duration: 3000,
          style: toastStyle_basic,
        });
      }
    }
  };
};
