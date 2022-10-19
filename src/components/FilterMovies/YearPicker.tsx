import { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setYear, clearYear, selectYear } from '../../store/filter-slice';
import { IFilterYear } from '../../store/filter-slice';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

function YearPicker() {
  const dispatch = useAppDispatch();
  const year = useAppSelector(selectYear);
  const [selectedYear, setSelectedYear] = useState<IFilterYear>(year);

  /** update year in store */
  const handleYearChange = () => {
    dispatch(setYear(selectedYear));
  };

  /** reset year in store */
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
          onChange={(e) =>
            setSelectedYear({
              value: e.target.value,
              hasChanged: true,
            })
          }
          onAfterChange={() => handleYearChange()}
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
