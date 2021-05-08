import React from 'react';

import MovieSearchItem from '../MovieSearchItem/MovieSearchItem';

export default function MovieSearchList(props) {
  const movies = (props.movies || []).map((movie) => {
    return (
      <MovieSearchItem
        key={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
        onClick={() => props.handleNominateClick(movie)}
        buttonName={props.buttonName}
        disabled={movie.disabled}
      />
    );
  });
  return <ul className="movie-list-ul">{movies}</ul>;
}
