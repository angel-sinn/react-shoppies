# Shoppies

Shoppies is a web application that allows users to search for and nominate movies.

View live application: <a href="https://shoppies-as.herokuapp.com/" target="_blank">Shoppies</a>  
(Note: may be a slight delay for the app to load)

## Project Stack

**Front-End**: HTML, SASS, JavaScript, React, Semantic UI  
**Back-End**: Nodejs  
**API**: OMDb API

## Project Features

**Required**

- Search results should come from OMDb's API
- Each search result should list at least its title, year of release and a button to nominate that film
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list
- If a search result has already been nominated, disable its nominate button
- Display a banner when the user has 5 nominations

**Additional**

- Animated buttons for nominate and remove buttons
- Nomination list is saved to user's local storage
- Debounce on search functionality to improve app performance
- Users can click on 'Start Nominating' button and it will automatically focus on search bar input field
- Submit button is displayed once user has 5 nominations and will lead to modal popup confirming submission success

## Final Product

**Homepage**

![Homepage gif](https://github.com/angel-sinn/react-shoppies/blob/master/docs/homepage.gif)

**Nominations**

![Nominations screenshot](https://github.com/angel-sinn/react-shoppies/blob/master/docs/max-nominations.png)

**Nominations Complete**

![Nominations Complete](https://github.com/angel-sinn/react-shoppies/blob/master/docs/modal.png)

## Getting Started

This project requires the OMDb API key to use, please see: <http://www.omdbapi.com/apikey.aspx>

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
