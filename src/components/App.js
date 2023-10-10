import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState, useEffect } from "react";


function App() {

  const [listings, setListings] = useState([]);
  const [filterVal, setFilterVal] = useState('');

  const filteredListings = listings.filter((listing) => {
    if(!filterVal){
      return true;
    }
    else if(listing.description.includes(filterVal)){
      return true;
    }
    return false;
  })

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(response => response.json())
      .then(data => setListings(data))
  }, []);

  function removeListing(listing) {
    setListings(listings.filter((el) => el.id !== listing.id));
  }

  function onDeleteListing(listing) {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE'
    })
      .then(() => removeListing(listing));
  }

  function changeFilterVal(userInput){
    setFilterVal(userInput);
  }

  return (
    <div className="app">
      <Header changeFilterVal={changeFilterVal}/>
      <ListingsContainer onDeleteListing={onDeleteListing} listings={filteredListings}/>
    </div>
  );
}

export default App;
