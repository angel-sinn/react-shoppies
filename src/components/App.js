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
    if (savedMovies) {
      setNominated(savedMovies);
    }
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
      const movies = (resultsJSON.Search).map(m => {
        return {
          ...m, 
          // !! is to convert object into boolean
          disabled: !!nominated.find(n => m.imdbID === n.imdbID)
        };
      });
      setMovies(movies)
    }
  }

  const addNominate = (movie) => {
    if (nominated.length < 5) {
      const nominateList = [...nominated, movie];
      setNominated(nominateList);
      fn(movie, false);
      saveData(nominateList);
    }
  }

  const removeNominate = (movie) => {
    const nominateList = nominated.filter((item) => item.imdbID !== movie.imdbID);
    setNominated(nominateList);
    fn(movie, false);
    saveData(nominateList);
  }

  const fn = (movie, disable) => {
    const toUpdateIndex = movies.findIndex(m => m.imdbID === movie.imdbID);
    const toUpdate = movies[toUpdateIndex];
    movies[toUpdateIndex] = {
      ...toUpdate,
      "disabled": disable
    };
    setMovies(movies);
  }

  return (
    <div>
      <h1>Shoppies</h1>
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Banner hidden={(nominated || []).length < 5 ? true : false}/>
      <div className="movie-lists">
        <div className="search-list">
          <h2>Search Results</h2>
          <MovieList movies={movies} handleNominateClick={addNominate} buttonName="Nominate"/>
        </div>
        <div className="nominate-list">
          <h2>Nominated Movies</h2>
          <MovieList movies={nominated} handleNominateClick={removeNominate} buttonName="Remove"/>
        </div>
      </div>
    </div>
  )
}
