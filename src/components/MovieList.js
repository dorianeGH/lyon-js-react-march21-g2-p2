import Grid from '@material-ui/core/Grid';
import React from 'react';
import MovieCard from './MovieCard';
// import { Link } from 'react-router-dom';

const MovieList = ({ movieList, imgUrl }) => {
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {movieList.map(
          ({
            id,
            release_date,
            vote_average,
            genre_ids,
            title,
            poster_path,
            overview,
          }) => (
            <MovieCard
              id={id}
              key={id}
              date={release_date}
              title={title}
              synopsis={overview}
              genre={genre_ids}
              average={vote_average}
              poster={poster_path ? imgUrl + poster_path : null}
            />
          )
        )}
      </Grid>
    </>
  );
};

export default MovieList;
