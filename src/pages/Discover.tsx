import useBannerMovie from '../hooks/useBannerMovie';
import './Discover.scss';
import { IMovie } from '../typings';
import Banner from '../layouts/Banner';
import Heading from '../layouts/Heading';
import FilterMovies from '../components/FilterMovies/FilterMovies';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectFilteredMovies } from '../store/movie-slice';
import { useEffect } from 'react';
import { fetchFilteredData } from '../store/filter-actions';
import { selectFilter } from '../store/filter-slice';
import FilteredDiscoverLayout from '../components/Discover/FilteredDiscoverLayout';
import InitialDiscoverLayout from '../components/Discover/InitialDiscoverLayout';

let isInitial = true;

function Discover() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  const filteredMovies = useAppSelector(selectFilteredMovies);
  const bannerMovie: IMovie = useBannerMovie();

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
      <main className="discover-main">
        <div className="movie-display">
          {filteredMovies.movies.length > 0 ? (
            <FilteredDiscoverLayout />
          ) : (
            <InitialDiscoverLayout />
          )}
        </div>
      </main>
    </div>
  );
}

export default Discover;
