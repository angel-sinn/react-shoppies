import React, { useState, useEffect } from 'react';

import { Button, Modal } from 'semantic-ui-react';

import MovieSearchList from './MovieSearchList';
import NominationList from './NominationList';
import Searchbar from './SearchBar';
import Banner from './Banner';
import Header from './Header';
import LandingContainer from './LandingContainer';
import ModalPopup from './Modal';

import './App.scss';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [nominated, setNominated] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  // set up debounce to reduce number of network requests
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    // cleanup function
    return () => {
      clearTimeout(timerId);
    };
  });

  useEffect(() => {
    searchMovies(debouncedTerm);
  }, [debouncedTerm]);

  // load saved nominated movies from local storage
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('shoppies-app'));
    if (savedMovies) {
      setNominated(savedMovies);
    }
  }, []);

  const saveData = (data) => {
    localStorage.setItem('shoppies-app', JSON.stringify(data));
  };

  const API_KEY = `${process.env.REACT_APP_API_KEY}`;

  const searchMovies = async (debouncedTerm) => {
    const url = `http://www.omdbapi.com/?s=${debouncedTerm}&apikey=${API_KEY}`;

    const results = await fetch(url);
    const resultsData = await results.json();

    if (resultsData.Search) {
      // add disabled property to movie objects
      const movies = resultsData.Search.map((movie) => {
        return {
          ...movie,
          // !! is to convert object into boolean
          disabled: !!nominated.find((item) => item.imdbID === movie.imdbID),
        };
      });
      setMovies(movies);
    }
  };

  const addNominate = (movie) => {
    if (nominated.length < 5) {
      const nominateList = [...nominated, movie];
      setNominated(nominateList);
      updateDisableButton(movie, true);
      saveData(nominateList);
    } else {
      document.querySelector('.nominate-list').scrollIntoView();
    }
  };

  const removeNominate = (movie) => {
    const nominateList = nominated.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setNominated(nominateList);
    updateDisableButton(movie, false);
    saveData(nominateList);
  };

  // helper function to update disabled state of nominate button
  const updateDisableButton = (movie, disable) => {
    const movieIndex = movies.findIndex((item) => item.imdbID === movie.imdbID);
    const movieToUpdate = movies[movieIndex];
    movies[movieIndex] = {
      ...movieToUpdate,
      disabled: disable,
    };
    setMovies(movies);
  };

  const clickToNominateSection = () => {
    document.querySelector('input').focus();
  };

  return (
    <div className="app-body">
      <LandingContainer handleLandingButtonClick={clickToNominateSection} />
      <div className="nominate-list">
        <Header title="Nominated Movies" />
        <div className="banner-notification">
          <Banner
            color="grey"
            size="large"
            hidden={nominated.length < 5 ? true : false}
          >
            You have reached the maximum number of 5 nominations.{' '}
            <ModalPopup
              trigger={<Button />}
              buttonText="Submit"
              buttonColor="grey"
              header="Nomination Success"
              content="Thank you for participating in the nomination!"
            />
          </Banner>
          <Banner
            color="grey"
            size="large"
            hidden={nominated.length < 1 ? false : true}
          >
            No nominated movies yet. Search movies below.
          </Banner>
        </div>
        <NominationList
          movies={nominated}
          handleNominateClick={removeNominate}
          buttonName="Remove"
        />
      </div>
      <div className="search-list-container">
        <Header title="Search Movies to Nominate" />
        <Searchbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Search movie"
        />
        <div search-results-list>
          <MovieSearchList
            movies={movies}
            handleNominateClick={addNominate}
            buttonName="Nominate"
          />
        </div>
      </div>
    </div>
  );
}
