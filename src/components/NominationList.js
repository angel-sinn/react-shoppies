import React from 'react';

import NominationItem from './NominationItem';

import './NominationList.scss';

export default function NominationList(props) {
  
  const movies = (props.movies || []).map((movie) => {
    return (
      <NominationItem
        key={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
        onClick={() => props.handleNominateClick(movie)}
        buttonName={props.buttonName}
        disabled={movie.disabled}
      />
    )
  })
  return <ul className="movie-list-ul">{movies}</ul>
}
