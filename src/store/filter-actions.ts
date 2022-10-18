import axios from 'axios';
import { IFilterState } from './filter-slice';
import { AppDispatch } from './index';
import { setMovies } from './movie-slice';

export const fetchFilteredData = (filter: IFilterState) => {
  return async (dispatch: AppDispatch) => {
    const selectedGenres = filter.genreIds;
    const genresRequest = selectedGenres
      ? `&with_genres=${selectedGenres
          .map((genreId: number) => genreId)
          .join(',')}`
      : '';
    const fetchData = async () => {
      const response = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=7be3ce26ccc379074b1928f26e79da20&language=en-US${genresRequest}`
      );

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
