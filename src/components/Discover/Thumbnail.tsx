import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setBookmarkData, selectBookmarks } from '../../store/bookmark-slice';
import { IMovie } from '../../typings';
import './Thumbnail.scss';
import { FaBookmark } from 'react-icons/fa';
import formatRating from '../../utils/formatRating';
import { POSTER_IMAGE_BASE_URL } from '../../utils/constants';
import { useState, useEffect } from 'react';

interface Props {
  movie: IMovie;
}

function Thumbnail({ movie }: Props) {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(selectBookmarks);
  const navigate = useNavigate();
  const { id, poster_path, title, vote_average } = movie;
  const [addedToList, setAddedToList] = useState(false);

  useEffect(() => {
    const isAdded = bookmarks.find((item) => item.id === id);
    setAddedToList(isAdded ? true : false);
  }, [bookmarks, id]);

  const addToBookmarkHandler = () => {
    dispatch(
      setBookmarkData({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      })
    );
  };

  return (
    <div className="thumbnail-card">
      <FaBookmark
        className="thumbnail-bookmark"
        onClick={() => addToBookmarkHandler()}
        style={{
          fill: addedToList ? 'red' : 'white',
        }}
      />

      <div
        className="thumbnail-card__content"
        onClick={() => navigate(`/movie/${id}`)}
      >
        <img
          src={`${POSTER_IMAGE_BASE_URL}${poster_path}`}
          alt={`${title} poster`}
          className="thumbnail-card__poster"
        />
        <div
          className="thumbnail-rating"
          style={{ color: `${formatRating(vote_average)}` }}
        >
          {vote_average}
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
