import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setBookmarkData, selectBookmarks } from '../../store/bookmark-slice';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaMinusCircle } from 'react-icons/fa';
import './BookmarkDropdown.scss';

function BookmarkDropdown() {
  /** get bookmarks from store */
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(selectBookmarks);

  return (
    <Dropdown>
      <Dropdown.Toggle id="bookmark-dropdown-button">My List</Dropdown.Toggle>
      <Dropdown.Menu id="bookmark-menu">
        {bookmarks &&
          bookmarks.map((bookmark) => (
            <div key={bookmark.id} className="bookmark-container">
              <Link to={`/movie/${bookmark.id}`} className="bookmark-link">
                {bookmark.title}
              </Link>
              <FaMinusCircle
                className="bookmark-remove-icon"
                onClick={() => dispatch(setBookmarkData(bookmark))}
              />
            </div>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BookmarkDropdown;
