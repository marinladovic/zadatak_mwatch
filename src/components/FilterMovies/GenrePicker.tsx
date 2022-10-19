import './FilterMovies.scss';
import requests from '../../utils/requests';
import useFetch from '../../hooks/useFetch';
import { IGenre } from '../../typings';
import ListItem from './ListItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setGenre, clearGenre } from '../../store/filter-slice';

function GenrePicker() {
  /** fetch genre list from API */
  const { fetchGenres } = requests;
  const { data } = useFetch(fetchGenres);

  const dispatch = useAppDispatch();
  const selectedGenres = useAppSelector((state: any) => state.filter.genreIds);

  /** add or remove genre from filter state */
  const handleCheckboxChange = (genre: IGenre) => {
    dispatch(setGenre(genre.id));
  };

  return (
    <div>
      <div className="filter-single-heading">
        <h3>Genres</h3>
        <button
          className="clear-single-filter"
          onClick={() => {
            dispatch(clearGenre());
          }}
        >
          clear genres
        </button>
      </div>
      <div className="genres-container">
        {data &&
          data.genres.map((genre: IGenre) => (
            <ListItem
              key={genre.id}
              genre={genre}
              handleOnChange={() => handleCheckboxChange(genre)}
              selected={selectedGenres.includes(genre.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default GenrePicker;
