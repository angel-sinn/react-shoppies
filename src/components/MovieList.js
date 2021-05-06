import React from 'react';

import MovieItem from './MovieItem';

export default function MovieList(props) {
  const movies = props.movies.map((movie) => {
    return (
        <MovieItem
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
      />
    )
  })
  return <ul>{movies}</ul>
  
    // <div>
    //   {props.movies.map((movie, index) => (
    //     <div>
    //       <img src={movie.Poster} alt="movie"/>
    //     </div>
    //   ))}
    // </div>
}
