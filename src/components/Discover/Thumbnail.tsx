import { useNavigate } from 'react-router-dom';
import { IMovie } from '../../typings';
import { FaBookmark } from 'react-icons/fa';
import formatRating from '../../utils/formatRating';
import './Thumbnail.scss';
import { POSTER_IMAGE_BASE_URL } from '../../utils/constants';

interface Props {
  movie: IMovie;
}

function Thumbnail({ movie }: Props) {
  const navigate = useNavigate();
  const { id, poster_path, title, vote_average } = movie;

  return (
    <div className="thumbnail-card" onClick={() => navigate(`/movie/${id}`)}>
      <img
        src={`${POSTER_IMAGE_BASE_URL}${poster_path}`}
        alt={`${title} poster`}
        className="thumbnail-card__poster"
      />
      <FaBookmark className="thumbnail-bookmark" />
      <div
        className="thumbnail-rating"
        style={{ color: `${formatRating(vote_average)}` }}
      >
        {vote_average}
      </div>
    </div>
  );
}

export default Thumbnail;
