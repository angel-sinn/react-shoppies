# Shoppies

Shoppies is a web application that allows users to search for and nominate up to 5 movies.

View live application: <a href="https://shoppies-as.herokuapp.com/" target="_blank">Shoppies</a>

## Project Stack

**Front-End**: HTML, SASS, JavaScript, React, Semantic UI  
**Back-End**: Express, Nodejs

## Project Features

- Users can search for movies and have the results displayed in real time
- Users can add a movie from the search results to the nomination list
- Users can view the list of movies already nominated and can remove a nominee from the nominated list
- Nomination list is saved to user's local storage
- Animated buttons for nominate and remove buttons
- Debounce on search functionality to improve app performance
- Users can click on 'Start Nominating' button and it will automatically focus on search bar input field

## Final Product

**Homepage**

![Homepage gif](https://github.com/angel-sinn/react-shoppies/blob/master/docs/homepage.gif)

**Nominations**

![Nominations screenshot](https://github.com/angel-sinn/react-shoppies/blob/master/docs/max-nominations.png)

**Nominations Complete**

![Nominations Complete](https://github.com/angel-sinn/react-shoppies/blob/master/docs/modal.png)

## Getting Started

This project requires the OMDB API key to use, please see: <http://www.omdbapi.com/apikey.aspx>

1. Fork this repository, and clone your fork of the repository

2. Install the dependencies with `npm install`

3. Create the `.env` file by using `.env.example` as a reference: `cp .env.example .env`

4. Once the dependencies are installed, run `npm start`

5. In your browser, go to `localhost:3000`

6. Start nominating!

## Dependencies

- Classnames
- Dotenv
- Node-sass
- React
- React-dom
- React-scripts
- Semantic-ui-css
- Semantic-ui-react
- Web-vitals
