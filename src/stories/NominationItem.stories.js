// Stylesheet
import '../index.scss';

// Component
import NominationItem from '../components/NominationItem/NominationItem';

export default {
  title: 'NominationItem',
  component: NominationItem,
};

const movie = [
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
];

export const Movie = () => (
  <NominationItem
    key={movie[0].imdbID}
    title={movie[0].Title}
    year={movie[0].Year}
    poster={movie[0].Poster}
    buttonName="Remove"
  />
);
