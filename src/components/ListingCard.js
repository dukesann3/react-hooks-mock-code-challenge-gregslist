import React from "react";
import { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {

  const { description, image, location } = listing;
  const [isClicked, setIsClicked] = useState(false);

  function favoriteBtn() {
    if (isClicked) {
      return <button aria-labelledby={description} className="emoji-button favorite active" onClick={() => setIsClicked(!isClicked)}>★</button>
    }
    return <button aria-labelledby={description} className="emoji-button favorite" onClick={() => setIsClicked(!isClicked)}>☆</button>
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favoriteBtn()}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onDeleteListing(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
