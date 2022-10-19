import requests from '../../utils/requests';
import useFetch from '../../hooks/useFetch';
import DiscoverMoviesSection from './DiscoverMovieSection';
import './InitialDiscoverLayout.scss';

function InitialDiscoverLayout() {
  const {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    fetchSFMovies,
    fetch2022Documentaries,
    fetchPopularComedies,
    fetchPopularHorrorMovies,
  } = requests;

  /** fetch movies */
  const { data: popularMovies } = useFetch(fetchPopularMovies);
  const { data: topRatedMovies } = useFetch(fetchTopRatedMovies);
  const { data: upcomingMovies } = useFetch(fetchUpcomingMovies);
  const { data: sfMovies } = useFetch(fetchSFMovies);
  const { data: documentaryMovies } = useFetch(fetch2022Documentaries);
  const { data: comedyMovies } = useFetch(fetchPopularComedies);
  const { data: horrorMovies } = useFetch(fetchPopularHorrorMovies);

  return (
    <div className="discover-layout__initial">
      <DiscoverMoviesSection
        title="Popular Movies"
        movies={popularMovies?.results}
      />
      <DiscoverMoviesSection
        title="Top Rated"
        movies={topRatedMovies?.results}
      />
      <DiscoverMoviesSection title="SF Movies" movies={sfMovies?.results} />
      <DiscoverMoviesSection
        title="Comedy Movies"
        movies={comedyMovies?.results}
      />
      <DiscoverMoviesSection
        title="Horror Movies"
        movies={horrorMovies?.results}
      />
      <DiscoverMoviesSection
        title="2022 Documentaries"
        movies={documentaryMovies?.results}
      />
      <DiscoverMoviesSection
        title="Upcoming"
        movies={upcomingMovies?.results}
      />
    </div>
  );
}

export default InitialDiscoverLayout;
