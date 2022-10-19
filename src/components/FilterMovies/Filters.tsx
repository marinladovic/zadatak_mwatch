import { clearAllFilters } from '../../store/filter-slice';
import { clearFilteredData } from '../../store/filter-actions';
import { useAppDispatch } from '../../store/hooks';
import GenrePicker from './GenrePicker';
import YearPicker from './YearPicker';
import MinVoteAverage from './MinVoteAverage';
import MinVoteCount from './MinVoteCount';
import { toast } from 'react-hot-toast';
import { toastStyle_basic } from '../../utils/toastStyle';

function Filters() {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="clear-all-container">
        <button
          className="clear-single-filter clear-all-filters"
          onClick={() => {
            dispatch(clearAllFilters());
            dispatch(clearFilteredData());
            toast('All filters cleared.', {
              duration: 3000,
              style: toastStyle_basic,
            });
          }}
        >
          CLEAR ALL FILTERS
        </button>
      </div>
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
