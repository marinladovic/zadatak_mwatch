import './SearchModal.scss';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  toggleSearchModal,
  selectShowSearchModal,
  setSearchQuery,
  selectSearchQuery,
  resetSearchQuery,
  clearSearchResults,
} from '../../store/searchModal-slice';
import { fetchSearchData } from '../../store/search-actions';
import SearchResults from './SearchResults';

let isInitial = true;

function SearchModal() {
  const dispatch = useAppDispatch();
  const showSearchModal = useAppSelector(selectShowSearchModal);
  const searchQuery = useAppSelector(selectSearchQuery);
  const [searchTerm, setSearchTerm] = useState('');

  /** close search modal and reset search data */
  const handleClose = () => {
    dispatch(toggleSearchModal());
    dispatch(resetSearchQuery());
    dispatch(clearSearchResults());
  };

  /** update search query in store */
  const handleSearch = (query: string) => {
    setSearchTerm(query);
    const formatedSearchTerm = formatSearchTerm(searchTerm);
    dispatch(setSearchQuery(formatedSearchTerm));
  };

  /** prevent default behavior on 'Enter' press */
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  /** format search term to be used in api request */
  const formatSearchTerm = (searchTerm: string) => {
    const formatedSearchTerm = searchTerm.replace(' ', '+');
    return formatedSearchTerm;
  };

  /** fetch search data on search query change */
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
                onChange={(e) => handleSearch(e.target.value)}
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
