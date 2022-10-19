import { BANNER_IMAGE_BASE_URL } from '../utils/constants';
import './Banner.scss';

interface Props {
  url: string;
  title: string;
}

function Banner({ url, title }: Props) {
  return (
    <div className="banner">
      <div className="banner-image-container">
        {url ? (
          <img
            src={`${BANNER_IMAGE_BASE_URL}${url}`}
            alt={title + ' banner'}
            className="banner-image"
          />
        ) : (
          <img
            src="/images/placeholder_backdrop.jpg"
            alt={title + ' banner'}
            className="banner-image"
          />
        )}
      </div>
      <div className="banner-blend gradient-to-b"></div>
    </div>
  );
}

export default Banner;
