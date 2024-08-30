import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbService from '../services/tmdbService';

const IMG_URL = 'https://image.tmdb.org/t/p/w1280';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieData = await tmdbService.getMovieDetails(id);
      setMovie(movieData);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      {movie.poster_path && (
        <img
          src={`${IMG_URL}${movie.backdrop_path}`}
          alt={movie.title}
        />
      )}
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </>
  );
};

export default MovieDetail;