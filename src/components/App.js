import React, { useState, useEffect } from 'react';

import MovieList from './MovieList';
import Searchbar from './SearchBar';


export default function App() {

  const [movies, setMovies] = useState([
    {
            "Title": "The Avengers",
            "Year": "2012",
            "imdbID": "tt0848228",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Endgame",
            "Year": "2019",
            "imdbID": "tt4154796",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
        },
  ]);

  const API_KEY = `${process.env.REACT_APP_API_KEY}`

  const searchMovies = async () => {
    const url = 'http://www.omdbapi.com/?s=avengers&apikey=' + API_KEY;

    const results = await fetch(url);

    const resultsJSON = await results.json();

    console.log(resultsJSON);
  }

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div>
      <h1>The Shoppies</h1>
      <Searchbar />
      <MovieList movies={movies}/>
    </div>
  )
}
