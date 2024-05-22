// HotelCard.js
// import React from 'react';

import React from 'react';

const HotelCard = ({ name, price, image, city }) => {
  const handleAddToCart = () => {
    // Add your logic for adding to cart here
    console.log(`Added ${name} to cart`);
  };

  return (
    <div className="hotel-card">
      <img src={image} alt={name} className="hotel-image" />
      <div className="hotel-details">
        <p className="city">City: {city}</p>
        <h3 className="name">{name}</h3>
        <p className="price">Price: Rs{price}/night</p>
        <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default HotelCard;
