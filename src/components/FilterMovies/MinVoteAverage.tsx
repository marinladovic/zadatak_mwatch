import { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import { useAppDispatch } from '../../store/hooks';
import {
  setMinVoteAverage,
  clearMinVoteAverage,
} from '../../store/filter-slice';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

function MinVoteAverage() {
  const dispatch = useAppDispatch();
  const [voteAverage, setVoteAverage] = useState<number>(0);

  const handleVoteAverageChange = () => {
    dispatch(setMinVoteAverage(voteAverage));
  };

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
          onAfterChange={(changeEvent) => handleVoteAverageChange()}
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
