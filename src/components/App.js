import React, { useState, useEffect } from 'react';

import MovieList from './MovieList';
import Searchbar from './SearchBar';
import Banner from './Banner';

import './App.scss';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [nominated, setNominated] = useState([]);
    
  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  // load saved nominated movies from local storage
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('shoppies-app'));

    setNominated(savedMovies);
  }, [])

  const saveData = (data) => {
    localStorage.setItem('shoppies-app', JSON.stringify(data));
  }

  const API_KEY = `${process.env.REACT_APP_API_KEY}`

  const searchMovies = async (searchTerm) => {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;

    const results = await fetch(url);
    const resultsJSON = await results.json();

    if (resultsJSON.Search) {
      setMovies(resultsJSON.Search)
    }
  }

  const addNominate = (movie) => {
    const nominateList = [...nominated, movie];
    setNominated(nominateList);
    saveData(nominateList);
  }

  const removeNominate = (movie) => {
    const nominateList = nominated.filter((item) => item.imdbID !== movie.imdbID);
    setNominated(nominateList);
    saveData(nominateList);
  }

  return (
    <div>
      <h1>The Shoppies</h1>
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Banner hidden={nominated.length < 5 ? true : false}/>
      <div className="movie-lists">
        <MovieList movies={movies} handleNominateClick={addNominate} button="Nominate"/>
        <MovieList movies={nominated} handleNominateClick={removeNominate} button="Remove"/>
      </div>
    </div>
  )
}
