import { clearAllFilters } from '../../store/filter-slice';
import { clearFilteredData } from '../../store/filter-actions';
import { useAppDispatch } from '../../store/hooks';
import GenrePicker from './GenrePicker';
import YearPicker from './YearPicker';
import MinVoteAverage from './MinVoteAverage';
import MinVoteCount from './MinVoteCount';

function Filters() {
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className="clear-single-filter clear-all-filters"
        onClick={() => {
          dispatch(clearAllFilters());
          dispatch(clearFilteredData());
          // @todo: Should I close the offcanvas here?
          // handleOffcanvasClose();
        }}
      >
        CLEAR ALL FILTERS
      </button>
      <div className="filter-form">
        <YearPicker />
        <GenrePicker />
        <MinVoteAverage />
        <MinVoteCount />
      </div>
    </>
  );
}

export default Filters;
