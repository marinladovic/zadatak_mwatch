import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import {
  setMinVoteCount,
  clearMinVoteCount,
  selectMinVoteCount,
} from '../../store/filter-slice';

function MinVoteCount() {
  const dispatch = useAppDispatch();
  const minVoteCount = useAppSelector(selectMinVoteCount);
  const [voteCount, setVoteCount] = useState<number>(minVoteCount);

  const handleVoteCountChange = () => {
    dispatch(setMinVoteCount(voteCount));
  };

  const handleClearVoteCount = () => {
    setVoteCount(0);
    dispatch(clearMinVoteCount());
  };

  return (
    <div>
      <div className="filter-single-heading">
        <h3>Min Vote Count: {voteCount}</h3>
        <button
          className="clear-single-filter"
          onClick={() => handleClearVoteCount()}
        >
          clear mvc
        </button>
      </div>
      <div className="year-slider-container">
        <RangeSlider
          value={voteCount}
          onChange={(changeEvent) => setVoteCount(+changeEvent.target.value)}
          onAfterChange={(changeEvent) => handleVoteCountChange()}
          min={0}
          max={500}
          step={25}
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

export default MinVoteCount;
