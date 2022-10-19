import { useEffect, useState } from 'react';
import { IMovie } from '../typings';
import requests from '../utils/requests';
import useFetch from './useFetch';

/** responsible for returning a movie to be displayed in the banner */
function useBannerMovie() {
  const { fetchPopularMovies } = requests;
  const { data: popularMovies } = useFetch(fetchPopularMovies);
  const [bannerMovie, setBannerMovie] = useState<IMovie>({
    backdrop_path: '',
    title: '',
    adult: false,
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    vote_average: 0,
    vote_count: 0,
  });

  useEffect(() => {
    if (popularMovies) {
      const randomIndex = Math.floor(
        Math.random() * popularMovies.results.length
      );
      setBannerMovie(popularMovies.results[randomIndex]);
    }
  }, [popularMovies]);

  return bannerMovie;
}

export default useBannerMovie;
