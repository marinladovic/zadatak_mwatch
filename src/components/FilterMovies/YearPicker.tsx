import { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import { useAppDispatch } from '../../store/hooks';
import { setYear, clearYear } from '../../store/filter-slice';
import { IFilterYear } from '../../store/filter-slice';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

function YearPicker() {
  const dispatch = useAppDispatch();
  const [selectedYear, setSelectedYear] = useState<IFilterYear>({
    value: '1970',
    hasChanged: false,
  });

  const handleYearChange = () => {
    dispatch(setYear(selectedYear));
  };

  const handleClearYear = () => {
    setSelectedYear({
      value: '1970',
      hasChanged: false,
    });
    dispatch(clearYear());
  };

  return (
    <div>
      <div className="filter-single-heading">
        <h3>Year</h3>
        <button
          className="clear-single-filter"
          onClick={() => handleClearYear()}
        >
          clear year
        </button>
      </div>
      <div className="year-slider-container">
        <div className="year-label-container ">
          <div className="year-slider-label">1900</div>
          <div className="year-slider-label">2022</div>
        </div>
        <RangeSlider
          value={selectedYear.value}
          onChange={(changeEvent) =>
            setSelectedYear({
              value: changeEvent.target.value,
              hasChanged: true,
            })
          }
          onAfterChange={(changeEvent) => handleYearChange()}
          min={1900}
          max={2022}
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

export default YearPicker;
