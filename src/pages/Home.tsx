import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import useBannerMovie from '../hooks/useBannerMovie';
import Banner from '../layouts/Banner';
import Heading from '../layouts/Heading';
import { IMovie } from '../typings';
import { FaArrowRight } from 'react-icons/fa';
import './Home.scss';
import FeatureHome from '../components/Home/FeatureHome';

function Home() {
  const navigate = useNavigate();
  /** fetch random popular movie for the banner */
  const bannerMovie: IMovie = useBannerMovie();

  return (
    <div className="home-container">
      <Banner url={bannerMovie?.backdrop_path} title={bannerMovie?.title} />
      <Heading
        heading="All your streaming services in one app"
        subheading="Get personal recommendations for movies and TV shows available on Netflix, Amazon Prime Video, Disney Plus and many more."
      />
      <Button
        variant="primary"
        className="button button__primary btn-home"
        onClick={() => navigate('/discover')}
      >
        Discover movies
        <FaArrowRight />
      </Button>
      <main className="home-main">
        <FeatureHome
          tagline="All in one place"
          heading="Your streaming guide"
          description="Get personal recommendations and see what’s new across your favorite
          streaming services."
          image="/images/guide.webp"
          imageAlt="guide"
          imagePosition="left"
        />
        <FeatureHome
          tagline="ONE SEARCH"
          heading="One search to rule them all"
          description="Never go back and forth between your services again to find out if a movie or TV show is available."
          image="/images/search.webp"
          imageAlt="search"
          imagePosition="right"
        />
        <FeatureHome
          tagline="ONE WATCHLIST"
          heading="Combine all your watchlists"
          description="Keep track of all the TV shows and movies you want to watch in one list across all your devices"
          image="/images/watchlist.webp"
          imageAlt="watchlist"
          imagePosition="left"
        />

        <div className="home-cta">
          <h2>
            Get recommendations from all your favorite streaming services in one
            place
          </h2>
          <Button
            variant="primary"
            className="button button__primary btn-home"
            onClick={() => navigate('/discover')}
          >
            Discover movies
            <FaArrowRight />
          </Button>
        </div>
      </main>
    </div>
  );
}

export default Home;
