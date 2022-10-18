import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { FaFilter } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './FilterMovies.scss';
import Filters from './Filters';

function FilterMovies() {
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
          <Filters />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default FilterMovies;
