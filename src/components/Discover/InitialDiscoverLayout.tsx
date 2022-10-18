import requests from '../../utils/requests';
import useFetch from '../../hooks/useFetch';
import DiscoverMoviesSection from './DiscoverMovieSection';
import './InitialDiscoverLayout.scss';

function InitialDiscoverLayout() {
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

  return (
    <div className="discover-layout__initial">
      <DiscoverMoviesSection
        title="Popular Movies"
        movies={popularMovies?.results}
      />
      <DiscoverMoviesSection
        title="Now Playing"
        movies={nowPlayingMovies?.results}
      />
      <DiscoverMoviesSection
        title="Top Rated"
        movies={topRatedMovies?.results}
      />
      <DiscoverMoviesSection
        title="Upcoming"
        movies={upcomingMovies?.results}
      />
    </div>
  );
}

export default InitialDiscoverLayout;
