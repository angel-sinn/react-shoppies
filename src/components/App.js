import React, { useState, useEffect } from 'react';

import MovieSearchList from './MovieSearchList';
import NominationList from './NominationList';
import Searchbar from './SearchBar';
import Banner from './Banner';
import Header from './Header';

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
    const resultsData = await results.json();

    if (resultsData.Search) {
      // add disabled property to movie objects
      const movies = (resultsData.Search).map(movie => {
        return {
          ...movie, 
          // !! is to convert object into boolean
          disabled: !!nominated.find((item) => item.imdbID === movie.imdbID)
        };
      });
      setMovies(movies)
    }
  }

  const addNominate = (movie) => {
    if (nominated.length < 5) {
      const nominateList = [...nominated, movie];
      setNominated(nominateList);
      updateDisableButton(movie, true);
      saveData(nominateList);
    }
  }

  const removeNominate = (movie) => {
    const nominateList = nominated.filter((item) => item.imdbID !== movie.imdbID);
    setNominated(nominateList);
    updateDisableButton(movie, false);
    saveData(nominateList);
  }

  // helper function to update disabled state of nominate button
  const updateDisableButton = (movie, disable) => {
    const movieIndex = movies.findIndex(item => item.imdbID === movie.imdbID);
    const movieToUpdate = movies[movieIndex];
    movies[movieIndex] = {
      ...movieToUpdate,
      "disabled": disable
    };
    setMovies(movies);
  }

  return (
    <div>
      <h1>Shoppies</h1>
      <div className="nominate-list">
        <Header title="Nominated Movies" />
        <div className="banner-notification">
          <Banner hidden={nominated.length < 5 ? true : false}/>
        </div>
      <NominationList movies={nominated} handleNominateClick={removeNominate} buttonName="Remove" />
      </div>
      <div className="search-list-container">
        <Header title="Search Movies to Nominate" />
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div search-results-list>
        <MovieSearchList movies={movies} handleNominateClick={addNominate} buttonName="Nominate"/>
        </div>
      </div>
    </div>
  )
}
