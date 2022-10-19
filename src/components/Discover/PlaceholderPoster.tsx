interface Props {
  title: string;
}

function PlaceholderPoster({ title }: Props) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#141414',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      {title}
    </div>
  );
}

export default PlaceholderPoster;
