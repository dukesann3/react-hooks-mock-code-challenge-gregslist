import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({onDeleteListing, listings}) {

  function showListings(){
    if(!listings){
      return <h2>Loading...</h2>
    }

    return listings.map((listing) => {
      return <ListingCard listing={listing} key={listing.id} onDeleteListing={onDeleteListing} />
    })
  }


  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {showListings()}
      </ul>
    </main>
  );
}

export default ListingsContainer;
