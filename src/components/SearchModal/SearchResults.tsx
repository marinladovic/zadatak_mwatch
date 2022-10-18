import { useAppSelector } from '../../store/hooks';
import { selectSearchResults } from '../../store/searchModal-slice';
import { POSTER_IMAGE_BASE_URL } from '../../utils/constants';
import { formatDate } from '../../utils/dateFormaters';
import formatRating from '../../utils/formatRating';
import './SearchResults.scss';

function SearchResults() {
  const searchResults = useAppSelector(selectSearchResults);

  if (!searchResults) return <p>No Search Results</p>;
  const { movies, total_results } = searchResults;

  return (
    <div className="search-result-wrapper">
      <p>Search Results: {total_results}</p>
      <div className="search-result-container">
        {movies &&
          movies.slice(0, 6).map((movie) => (
            <div
              key={movie.id}
              className="search-result"
              onClick={() => console.log(`navigate to: /movie/${movie.id}`)}
            >
              <div className="search-result__image-container">
                <img
                  src={`${POSTER_IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="search-result__image"
                />
              </div>
              <div className="search-result__info">
                <p className="search-result__title">{movie.title}</p>
                <p className="search-result__release-date">
                  {formatDate(movie.release_date)}
                </p>
                <p className="search-result__rating">
                  <span
                    style={{ color: `${formatRating(movie.vote_average)}` }}
                  >
                    {movie.vote_average}
                  </span>{' '}
                  from {movie.vote_count} votes
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchResults;
