import React from "react";
import { useState } from "react";

function Search({changeFilterVal}) {

  const [userInput, setUserInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    changeFilterVal(userInput);
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
