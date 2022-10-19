import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IMovie } from '../../typings';
import './DiscoverMovieSection.scss';
import Thumbnail from './Thumbnail';

interface Props {
  title: string;
  movies: IMovie[];
}

function DiscoverMovieSection({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);

  /** diaplaying movie data in scrollable row */
  const handleScroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="row-container">
      <h2>{title}</h2>
      <div className="row-content-container">
        <div
          className="chevron-icon-container chevron-icon-container__left"
          onClick={() => handleScroll('left')}
        >
          <FaChevronLeft className="chevron-icon" />
        </div>
        <div ref={rowRef} className="thumbnails-container">
          {movies &&
            movies.map((movie) => <Thumbnail key={movie.id} movie={movie} />)}
        </div>
        <div
          className="chevron-icon-container chevron-icon-container__right"
          onClick={() => handleScroll('right')}
        >
          <FaChevronRight className="chevron-icon" />
        </div>
      </div>
    </div>
  );
}

export default DiscoverMovieSection;
