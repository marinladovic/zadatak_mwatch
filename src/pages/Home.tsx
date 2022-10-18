import useBannerMovie from '../hooks/useBannerMovie';
import Banner from '../layouts/Banner';
import { IMovie } from '../typings';

function Home() {
  const bannerMovie: IMovie = useBannerMovie();

  return (
    <div>
      <Banner url={bannerMovie.backdrop_path} title={bannerMovie.title} />
    </div>
  );
}

export default Home;
