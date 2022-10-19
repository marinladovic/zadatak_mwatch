import { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setMinVoteAverage,
  clearMinVoteAverage,
  selectMinVoteAverage,
} from '../../store/filter-slice';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

function MinVoteAverage() {
  const dispatch = useAppDispatch();
  const minVoteAverage = useAppSelector(selectMinVoteAverage);
  const [voteAverage, setVoteAverage] = useState<number>(minVoteAverage);

  /** update min vote average in store */
  const handleVoteAverageChange = () => {
    dispatch(setMinVoteAverage(voteAverage));
  };

  /** clear min vote average in store */
  const handleClearVoteAverage = () => {
    setVoteAverage(0);
    dispatch(clearMinVoteAverage());
  };

  return (
    <div>
      <div className="filter-single-heading">
        <h3>Min Vote Average: {voteAverage}</h3>
        <button
          className="clear-single-filter"
          onClick={() => handleClearVoteAverage()}
        >
          clear mva
        </button>
      </div>
      <div className="year-slider-container">
        <RangeSlider
          value={voteAverage}
          onChange={(changeEvent) => setVoteAverage(+changeEvent.target.value)}
          onAfterChange={() => handleVoteAverageChange()}
          min={0}
          max={10}
          size="lg"
          variant="dark"
          tooltip="auto"
          tooltipPlacement="top"
          className="year-slider"
        />
      </div>
    </div>
  );
}

export default MinVoteAverage;
