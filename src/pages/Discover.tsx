import Banner from '../layouts/Banner';

function Discover() {
  const placeholder = {
    url: '/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg',
    title: 'Maverick',
  };

  return (
    <div>
      <Banner url={placeholder.url} title={placeholder.title} />
    </div>
  );
}

export default Discover;
