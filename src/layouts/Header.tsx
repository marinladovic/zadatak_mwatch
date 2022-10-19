import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Header.scss';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleSearchModal } from '../store/searchModal-slice';
import BookmarkDropdown from '../components/BookmarkDropdown/BookmarkDropdown';
import { selectBookmarks } from '../store/bookmark-slice';

function Header() {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(selectBookmarks);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleShowSearchModal = () => {
    dispatch(toggleSearchModal());
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header className={isScrolled ? 'header-bg' : ''}>
      <div className="header-content">
        <div className="header-content__left">
          <Link to="/" className="header-logo">
            M<span>Watch</span>
          </Link>
          <ul className="header-links">
            <li>
              <Link className="header-links__item" to="/discover">
                Discover
              </Link>
            </li>
          </ul>
          {bookmarks && bookmarks.length > 0 && <BookmarkDropdown />}
        </div>
        <div className="header-content__right">
          <FaSearch
            className="search-icon"
            onClick={() => handleShowSearchModal()}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
