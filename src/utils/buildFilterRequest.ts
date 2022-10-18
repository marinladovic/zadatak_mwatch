import { IFilterState } from '../store/filter-slice';
import { DISCOVER_URL } from './constants';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const buildFilterRequest = (filter: IFilterState) => {
  let requestString = '';
  const { changed, genreIds, year, minVoteAverage, minVoteCount } = filter;
  if (changed) {
    const yearRequest = filter.year.hasChanged
      ? `&primary_release_year=${year.value}`
      : '';
    const genresRequest =
      genreIds.length > 0 ? `&with_genres=${genreIds.join(',')}` : '';
    const minVoteAverageRequest =
      minVoteAverage > 0 ? `&vote_average.gte=${minVoteAverage}` : '';
    const minVoteCountRequest =
      minVoteCount > 0 ? `&vote_count.gte=${minVoteCount}` : '';

    requestString = `${DISCOVER_URL}?api_key=${API_KEY}&language=en-US${yearRequest}${genresRequest}${minVoteAverageRequest}${minVoteCountRequest}`;
  }
  return requestString;
};

export default buildFilterRequest;
