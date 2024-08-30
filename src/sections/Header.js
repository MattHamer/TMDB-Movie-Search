import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";

const Header = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.startsWith('/search' && location.pathname !== '/')) {
      setMovies([]);
    }
  }, [location.pathname]);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/featured">Featured</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </nav>
      <div>
        <MovieSearch onSearchResults={setMovies} />
        <ul>
          {movies.length > 0 && (
            <MovieList movies={movies} />
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;