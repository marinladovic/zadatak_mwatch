import './SearchModal.scss';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  toggleSearchModal,
  selectShowSearchModal,
  setSearchQuery,
  selectSearchQuery,
  resetSearchQuery,
  clearSearchResults,
} from '../store/searchModal-slice';
import { fetchSearchData } from '../store/search-actions';
import SearchResults from '../components/SearchModal/SearchResults';

let isInitial = true;

function SearchModal() {
  const dispatch = useAppDispatch();
  const showSearchModal = useAppSelector(selectShowSearchModal);
  const searchQuery = useAppSelector(selectSearchQuery);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => {
    dispatch(toggleSearchModal());
    dispatch(resetSearchQuery());
    dispatch(clearSearchResults());
  };

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
    const formatedSearchTerm = formatSearchTerm(searchTerm);
    dispatch(setSearchQuery(formatedSearchTerm));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const formatSearchTerm = (searchTerm: string) => {
    const formatedSearchTerm = searchTerm.replace(' ', '+');
    return formatedSearchTerm;
  };

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(fetchSearchData(searchQuery));
  }, [searchQuery, dispatch]);

  return (
    <Modal
      show={showSearchModal}
      onHide={handleClose}
      size="lg"
      className="search-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="m-0">
              <Form.Control
                className="search-input"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => handleSearch(e)}
                type="text"
              />
            </Form.Group>
          </Form>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SearchResults />
      </Modal.Body>
    </Modal>
  );
}

export default SearchModal;
