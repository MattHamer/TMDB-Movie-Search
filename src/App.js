import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./sections/Header";
import Home from "./pages/Home";
import Featured from "./pages/Featured";
import Account from "./pages/Account";
import Movie from "./pages/Movie";
//import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/account" element={<Account />} />
        {/*<Route path="/search/:query" element={<SearchResults />} />*/}
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
