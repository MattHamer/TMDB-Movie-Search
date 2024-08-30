import React from "react";
import { Link } from "react-router-dom";

const IMG_URL = 'https://image.tmdb.org/t/p/w200';

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {

        const releaseYear = movie.release_date ? movie.release_date.substring(0, 4) : '';
        const bio = movie.overview && movie.overview.length > 250 ?
          `${movie.overview.substring(0, 250)}...` : movie.overview || '';

        return (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.poster_path && (
                <img
                  src={`${IMG_URL}${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
            </Link>
            <aside>
              <span>
                <Link to={`/movie/${movie.id}`}>
                  <h3>{movie.title}</h3>
                </Link>
                <time>{releaseYear}</time>
              </span>
              <p>{bio}</p>
            </aside>
          </div>
        );
      })}
    </>
  );
}

export default MovieList;