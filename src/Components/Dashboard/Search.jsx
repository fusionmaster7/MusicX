//Component for renderging Search Bar

import React from "react";

import "../Styles/Search.css";

const Search = () => {
  return (
    <div className="search">
      <form>
        <input
          type="text"
          className="search-music"
          placeholder="Search for Songs, Artists, etc.."
        ></input>
      </form>
    </div>
  );
};

export default Search;
