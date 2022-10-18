import useFetch from '../hooks/useFetch';
import useBannerMovie from '../hooks/useBannerMovie';
import './Discover.scss';
import requests from '../utils/requests';
import { IMovie } from '../typings';
import Banner from '../layouts/Banner';
import Heading from '../layouts/Heading';
import FilterMovies from '../components/FilterMovies/FilterMovies';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { fetchFilteredData } from '../store/filter-actions';

let isInitial = true;

function Discover() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state: any) => state.filter);
  const bannerMovie: IMovie = useBannerMovie();

  const {
    fetchNowPlayingMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
  } = requests;

  const { data: popularMovies } = useFetch(fetchPopularMovies);
  const { data: nowPlayingMovies } = useFetch(fetchNowPlayingMovies);
  const { data: topRatedMovies } = useFetch(fetchTopRatedMovies);
  const { data: upcomingMovies } = useFetch(fetchUpcomingMovies);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (filter.changed) {
      dispatch(fetchFilteredData(filter));
    }
  }, [filter, dispatch]);

  return (
    <div className="discover-container">
      <Banner url={bannerMovie?.backdrop_path} title={bannerMovie?.title} />
      <Heading
        heading="Welcome to MWatch"
        subheading="Don't know what to watch next? Explore our collection of over a
          million of titles, and find your next favorite movie."
      />
      <FilterMovies />
      <main className="discover-main"></main>
    </div>
  );
}

export default Discover;
