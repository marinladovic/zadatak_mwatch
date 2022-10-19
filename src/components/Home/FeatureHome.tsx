import './FeatureHome.scss';

interface Props {
  tagline: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}

function FeatureHome({
  tagline,
  heading,
  description,
  image,
  imageAlt,
  imagePosition,
}: Props) {
  return (
    <div className="feature-container">
      <div
        className="feature-image"
        style={{
          order: imagePosition === 'right' ? 2 : 1,
        }}
      >
        <img src={image} alt={imageAlt} />
      </div>
      <div
        className="feature-text"
        style={{
          order: imagePosition === 'right' ? 1 : 2,
        }}
      >
        <p className="feature-tagline">{tagline}</p>
        <h2 className="feature-heading">{heading}</h2>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
}

export default FeatureHome;
