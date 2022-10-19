import { BASE_URL } from './constants';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  /** Fetch lists of movies */
  fetchPopularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcomingMovies: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchSFMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878,12`,
  fetch2022Documentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_year=2022&with_genres=99`,
  fetchPopularComedies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchPopularHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  /** Fetch list of available movie genres */
  fetchGenres: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
};

export default requests;
