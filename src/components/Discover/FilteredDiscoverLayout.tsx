import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectFilteredMovies } from '../../store/movie-slice';
import { increasePageIndex } from '../../store/filter-slice';
import './FilteredDiscoverLayout.scss';
import Thumbnail from './Thumbnail';
import Button from 'react-bootstrap/esm/Button';

function FilteredDiscoverLayout() {
  /** get filtered movies from store */
  const { movies, page, total_pages, total_results } =
    useAppSelector(selectFilteredMovies);
  const dispatch = useAppDispatch();

  /** load more movies */
  const handleLoadMore = () => {
    dispatch(increasePageIndex());
  };

  return (
    <div className="results-container">
      <p className="total-results">Total Results: {total_results}</p>
      <div className="results-grid">
        {movies &&
          movies.map((movie) => <Thumbnail key={movie.id} movie={movie} />)}
      </div>
      {page < total_pages && (
        <Button
          variant="primary"
          className="button button__primary load-more-btn"
          onClick={() => handleLoadMore()}
        >
          Load More
        </Button>
      )}
    </div>
  );
}

export default FilteredDiscoverLayout;
