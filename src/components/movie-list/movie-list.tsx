'use client';

import { useState } from 'react';
import MovieCardPreview from '../movie-card/movie-card-preview/movie-card-preview';

const List = ({ props }: any) => {
    const [hoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseEnter = (itemId: any) => {
      setHoveredItemId(itemId);
    };
  
    const handleMouseLeave = () => {
      setHoveredItemId(null);
    };
  return (
    <>
      {props.releases?.map((item: any) => (
        <div key={item.filmId}
        onMouseEnter={() => handleMouseEnter(item)}
        onMouseLeave={handleMouseLeave}
        >
          <MovieCardPreview props={item} isHovered={item === hoveredItemId}/>
        </div>
      ))}
    </>
  );
};

export default List;
