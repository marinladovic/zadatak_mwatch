import './Heading.scss';

interface Props {
  heading: string;
  subheading?: string;
}

function Heading({ heading, subheading }: Props) {
  return (
    <div className="heading-container">
      <h1 className="heading-1">{heading}</h1>
      {subheading && <p className="para">{subheading}</p>}
    </div>
  );
}

export default Heading;
