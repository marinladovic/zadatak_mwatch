import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setBookmarkData, selectBookmarks } from '../../store/bookmark-slice';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaMinusCircle } from 'react-icons/fa';
import './BookmarkDropdown.scss';

function BookmarkDropdown() {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(selectBookmarks);

  return (
    <Dropdown>
      <Dropdown.Toggle id="bookmark-dropdown-button">Bookmarks</Dropdown.Toggle>
      <Dropdown.Menu id="bookmark-menu">
        {bookmarks ? (
          bookmarks.map((bookmark) => (
            <div key={bookmark.id} className="bookmark-container">
              <div>
                <FaMinusCircle
                  style={{ fill: 'red', cursor: 'pointer' }}
                  onClick={() => dispatch(setBookmarkData(bookmark))}
                />
              </div>
              <Link to={`/movie/${bookmark.id}`} className="bookmark-link">
                {bookmark.title}
              </Link>
            </div>
          ))
        ) : (
          <Dropdown.Item>No bookmarks yet</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BookmarkDropdown;