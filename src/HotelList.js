import React from 'react';

const hotelsData = [
  { id: 1, name: "Hotel A", price: 100, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Hotel B", price: 150, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Hotel C", price: 200, image: "https://via.placeholder.com/150" }
];

const HotelList = () => {
  return (
    <div className="row">
      {hotelsData.map((hotel) => (
        <div key={hotel.id} className="col-md-4 mb-4">
          <div className="card hotel-card">
            <img src={hotel.image} className="card-img-top" alt={hotel.name} />
            <div className="card-body">
              <h5 className="card-title">{hotel.name}</h5>
              <p className="card-text">Price: ${hotel.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
