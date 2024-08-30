import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import tmdbService from "../services/tmdbService";

const MovieSearch = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');
  //const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = async (event) => {
    event.preventDefault();

    if (query) {
      {/* Creates a seperate search page, not needed? */ }
      //navigate(`/search/${encodeURIComponent(query)}`); 
      const results = await tmdbService.searchMovies(query);
      onSearchResults(results);
    }
  };

  useEffect(() => {
    setQuery('');
  }, [location.pathname]);

  return (
    <form onSubmit={handleSearch}>
      <input type="text" placeholder="Search"
        value={query} onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default MovieSearch;