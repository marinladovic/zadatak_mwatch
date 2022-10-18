import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import { selectShowSearchModal } from './store/searchModal-slice';
import Header from './layouts/Header';
import Discover from './pages/Discover';
import Home from './pages/Home';
import SearchModal from './layouts/SearchModal';

function App() {
  const showSearchModal = useAppSelector(selectShowSearchModal);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </Router>
      {showSearchModal && <SearchModal />}
    </>
  );
}

export default App;
