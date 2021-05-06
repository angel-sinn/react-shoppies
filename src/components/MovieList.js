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
        onClick={() => props.handleNominateClick(movie)}
        button={props.button}
      />
    )
  })
  return <ul>{movies}</ul>
}
