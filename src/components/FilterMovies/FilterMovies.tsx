import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { FaFilter } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './FilterMovies.scss';
import GenrePicker from './GenrePicker';
import { useAppDispatch } from '../../store/hooks';
import { clearAllFilters } from '../../store/filter-slice';
import YearPicker from './YearPicker';
import MinVoteAverage from './MinVoteAverage';
import MinVoteCount from './MinVoteCount';

function FilterMovies() {
  const dispatch = useAppDispatch();
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
    <div className="offcanvas-container">
      <Button
        variant="primary"
        className="button button__primary"
        onClick={handleOffcanvasShow}
      >
        <FaFilter />
        Filter
      </Button>
      <Offcanvas
        show={showOffcanvas}
        scroll={false}
        backdrop={false}
        variant="dark"
        onHide={handleOffcanvasClose}
        style={{ backgroundColor: '#141414' }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title className="offcanvas-title">
            Filter Movies
            <AiOutlineClose
              onClick={handleOffcanvasClose}
              className="offcanvas__close-btn"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <button
            className="clear-single-filter clear-all-filters"
            onClick={() => {
              dispatch(clearAllFilters());
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
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default FilterMovies;
