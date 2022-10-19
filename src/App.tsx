import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { selectShowSearchModal } from './store/searchModal-slice';
import { fetchBookmarkData } from './store/bookmark-slice';
import Header from './layouts/Header';
import Discover from './pages/Discover';
import Home from './pages/Home';
import SearchModal from './components/SearchModal/SearchModal';
import { useEffect } from 'react';
import Movie from './pages/Movie';

function App() {
  const dispatch = useAppDispatch();
  const showSearchModal = useAppSelector(selectShowSearchModal);

  useEffect(() => {
    dispatch(fetchBookmarkData());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </Router>
      {showSearchModal && <SearchModal />}
    </>
  );
}

export default App;
