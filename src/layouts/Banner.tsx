import { BANNER_IMAGE_BASE_URL } from '../utils/constants';
import './Banner.scss';

interface Props {
  url: string;
  title: string;
}

function Banner({ url, title }: Props) {
  const placeholder = {
    url: '/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg',
    title: 'Maverick',
  };

  return (
    <div className="banner">
      <div className="banner-image-container">
        <img
          src={`${BANNER_IMAGE_BASE_URL}${url || placeholder.url}`}
          alt={title || placeholder.title}
          className="banner-image"
        />
      </div>
      <div className="banner-blend gradient-to-b"></div>
    </div>
  );
}

export default Banner;
