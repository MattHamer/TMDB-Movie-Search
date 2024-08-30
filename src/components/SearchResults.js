import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbService from "../services/tmdbService";
import MovieList from "../components/MovieList";

const SearchResults = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const results = await tmdbService.searchMovies(decodeURIComponent(query));
      setMovies(results);
    };

    fetchResults();
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{decodeURIComponent(query)}"</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default SearchResults;