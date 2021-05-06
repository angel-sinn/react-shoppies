// Stylesheet
import '../index.scss';

// Component
import MovieItem from "../components/MovieItem";

export default {
  title: "MovieItem",
  component: MovieItem,
};

const movie = [
   {
    "Title": "The Avengers",
    "Year": "2012",
    "imdbID": "tt0848228",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
]

export const Movie = () => (
  <MovieItem
      key={movie[0].imdbID}
      title={movie[0].Title}
      year={movie[0].Year}
      poster={movie[0].Poster}
  />
);

