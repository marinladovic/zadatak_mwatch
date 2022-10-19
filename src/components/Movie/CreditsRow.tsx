import { useRef, useState } from 'react';
import { ICredit } from '../../typings';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CreditThumbnail from './CreditThumbnail';
import './CreditRow.scss';

interface Props {
  credits: ICredit[];
  job: string;
}

function CreditsRow({ credits, job }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleScroll = (direction: string) => {
    setIsMoved(true);
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
    <div className="row-container credit-row-container">
      <h2 className="row-jobs">{job}</h2>
      <div className="row-content-container">
        <div
          className="chevron-icon-container chevron-icon-container__left"
          onClick={() => handleScroll('left')}
        >
          <FaChevronLeft className="chevron-icon" />
        </div>
        <div ref={rowRef} className="thumbnails-container">
          {credits.slice(0, 20).map((credit, index) => (
            <CreditThumbnail key={index} credit={credit} />
          ))}
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

export default CreditsRow;
