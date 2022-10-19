import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setBookmarkData, selectBookmarks } from '../store/bookmark-slice';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/constants';
import Banner from '../layouts/Banner';
import Heading from '../layouts/Heading';
import DiscoverMovieSection from '../components/Discover/DiscoverMovieSection';
import { FaBookmark } from 'react-icons/fa';
import './Movie.scss';
import { formatDate } from '../utils/dateFormaters';
import {
  IGenre,
  IProductionCompany,
  IProductionCountry,
  ISpokenLanguage,
} from '../typings';
import CreditsRow from '../components/Movie/CreditsRow';
import formatRating from '../utils/formatRating';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

function Movie() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(selectBookmarks);
  const [addedToList, setAddedToList] = useState(false);
  const { data: movie } = useFetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,credits,recommendations`
  );

  useEffect(() => {
    const isAdded = bookmarks.find((item) => item.id === +id!);
    setAddedToList(isAdded ? true : false);
  }, [bookmarks, id]);

  const addToBookmarkHandler = () => {
    dispatch(
      setBookmarkData({
        id: movie!.id,
        title: movie!.title,
        poster_path: movie!.poster_path,
        backdrop_path: movie!.backdrop_path,
      })
    );
  };

  if (!movie) return null;

  return (
    <div className="movie-container">
      <Banner url={movie?.backdrop_path} title={movie?.title} />
      <Heading heading={movie?.title} subheading={movie?.tagline} />
      <button
        className="added-to-bookmark-btn"
        onClick={() => addToBookmarkHandler()}
      >
        {addedToList ? (
          <>
            <FaBookmark style={{ fill: 'red' }} />
            Added to My List
          </>
        ) : (
          <>
            <FaBookmark style={{ fill: 'white' }} />
            Add to My List
          </>
        )}
      </button>
      <div className="movie-content">
        <section className="movie-info">
          {movie?.release_date && (
            <p>Release date: {formatDate(movie.release_date)}</p>
          )}
          {movie?.vote_average && (
            <p>
              Average Rating:{' '}
              <span style={{ color: `${formatRating(movie.vote_average)}` }}>
                {parseFloat(movie.vote_average).toFixed(1)}
              </span>{' '}
              from{' '}
              {movie.vote_count
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              votes
            </p>
          )}
          {movie?.runtime && <p>Runtime: {movie.runtime} min</p>}
          {movie?.genres && (
            <p>
              Genre:{' '}
              {movie.genres &&
                movie.genres.map((genre: IGenre) => genre.name).join(', ')}
            </p>
          )}
        </section>
        {/* Left side*/}
        <div className="content__left">
          {/* Overview section */}
          <section className="movie-overview">
            <h2>Overview</h2>
            <p>{movie?.overview}</p>
          </section>
          {/* Credits Section */}
          <section className="flex flex-col space-y-6">
            {movie?.credits.cast && (
              <CreditsRow credits={movie.credits.cast} job="cast" />
            )}
            {movie?.credits.crew && (
              <CreditsRow credits={movie.credits.crew} job="crew" />
            )}
          </section>
        </div>
        <div className="content__right">
          {/* Facts section */}
          <section className="flex flex-col space-y-2 md:col-span-3 md:space-y-4">
            <h2>Facts</h2>
            <div className="facts-container">
              <p>Status: {movie?.status}</p>
              {movie?.budget !== 0 && (
                <p>
                  Budget: ${' '}
                  {movie?.budget
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              )}
              {movie?.revenue !== 0 && (
                <p>
                  Revenue: ${' '}
                  {movie?.revenue
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              )}
              <p>Original title: {movie?.original_title}</p>
              <p>
                Spoken Languages:{' '}
                {movie?.spoken_languages &&
                  movie.spoken_languages
                    .map((language: ISpokenLanguage) => language.english_name)
                    .join(', ')}
              </p>
            </div>
          </section>
          {/* Poster Section */}
          {movie?.poster_path && (
            <section className="poster-section">
              <h2>Movie Poster</h2>
              <div className="poster-container">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                  alt={movie?.title}
                  className="poster"
                />
              </div>
            </section>
          )}
          {/* Production section */}
          <div className="production-section">
            <div>
              <p>Production companies:</p>
              <p>
                {movie?.production_companies &&
                  movie.production_companies
                    .map((production: IProductionCompany) => production.name)
                    .join(', ')}
              </p>
            </div>
            <div>
              <p>Production countries:</p>
              <p>
                {movie?.production_countries &&
                  movie.production_countries
                    .map((country: IProductionCountry) => country.iso_3166_1)
                    .join(', ')}
              </p>
            </div>
          </div>
        </div>
        {/* Reccomendations section */}
        {movie?.recommendations && (
          <section className="reccomendations-section">
            <DiscoverMovieSection
              title="Reccomendations"
              movies={movie.recommendations.results}
            />
          </section>
        )}
      </div>
    </div>
  );
}

export default Movie;
