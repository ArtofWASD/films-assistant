'use client';
import MovieCardPreview from '../movie-card/movie-card-preview/movie-card-preview';

const List = ({ props }: any) => {
  return (
    <>
      {props.releases?.map((item: any) => (
        <div key={item.filmId}>
          <MovieCardPreview props={item}/>
        </div>
      ))}
    </>
  );
};

export default List;
