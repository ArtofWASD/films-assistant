interface GenresProps {
  genres: Array<string>;
}

const Genres: React.FC<GenresProps> = ({ genres }) => {
  return (
    <div className='flex gap-1'>
      <p className='font-semibold'>Жанр:</p>
      <p className='flex gap-1 whitespace-normal'>
        {genres.map((item:any) => item.name).join(', ')}
      </p>
    </div>
  );
};

export default Genres;
