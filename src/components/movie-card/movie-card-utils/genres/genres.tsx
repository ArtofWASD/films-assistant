interface GenresProps {
  genres: Array<string>;
}

const Genres: React.FC<GenresProps> = ({ genres }) => {
  return (
    <div className='flex gap-1'>
      <p className='font-semibold'>Жанр:</p>
      <ul className='flex gap-1'>
        {genres.map((item: any, index: number) => {
          if (index === genres.length - 1) {
            return <li key={item.genre}>{item.genre}.</li>;
          } else {
            return <li key={item.genre}>{item.genre},</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default Genres;
