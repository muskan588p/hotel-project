import React, { useState } from 'react';
import './styles.css';

import video1 from './video/video1.mp4';
import image3 from './image/image3.webp';
import image2 from './image/image2.webp';
import image1 from './image/image1.webp';
import { faMagnifyingGlass, faCartShopping, faStar, faTrash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hotel from './images/hotel.jpeg';
import untitled from './images/untitled.jpeg';
import a from './images/a.jpeg';
import b from './images/b.jpeg';
import c from './images/c.jpeg';
import d from './images/d.jpeg';
import e from './images/e.jpeg';
import f from './images/f.jpeg';
import q from './images/q.jpeg';
import r from './images/r.jpeg';
import u from './images/u.jpeg';
import w from './images/w.jpeg';
import star from './image/star.png';

import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure bootstrap CSS is imported
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header({ totalItems, openCartModal }) {
  return (
    <header>
      <div id="menu-bar" className="fas fa-bars"></div>
      <a href="#" className="logo"><span>T</span>ravel</a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#book">Book</a>
        <a href="#packages">Packages</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="icon" onClick={openCartModal}>
        <FontAwesomeIcon icon={faCartShopping} id="cart-btn" />
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </div>
      <form action="" className="search-bar-container">
        <input type="search" id="search-bar" placeholder="Search here..." />
        <label htmlFor="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
      </form>
    </header>
  );
}

function CartModal({ cartItems, closeModal, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button className="close-btn" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2>Cart</h2>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="delete-btn" onClick={() => removeFromCart(item)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total-section">
          <p>Total Price: ₹{totalPrice}</p>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Adventure is Worthwhile</h3>
        <p>Discover New Places With Us, Adventure Awaits</p>
        <a href="#" className="btn">Discover more</a>
      </div>
      <div className="controls">
        <span className="vid-btn active" source src={video1}></span>
      </div>
      <div className="video-container">
        <video src={video1} id="video-slider" loop autoPlay muted></video>
      </div>
    </section>
  );
}

function PackagesSection({ addToCart }) {
  const packages = [
    { id: 1, name: 'Mumbai Package', city: 'Mumbai', price: 9000, image: image3 },
    { id: 2, name: 'Delhi Package', city: 'Delhi', price: 7500, image: image2 },
    { id: 3, name: 'Bangalore Package', city: 'Bangalore', price: 10000, image: image1 }
  ];

  const mumbaiHotels = [
    { name: 'Hotel Sea View', city: 'Mumbai', price: 1500, image: `${hotel}` },
    { name: 'Holiday Inn', city: 'Mumbai', price: 3500, image: `${untitled}` },
    { name: 'Ramada Palace', city: 'Mumbai', price: 2000, image: `${a}` },
   
  ];

  const delhiHotels = [
    { name: 'Radisson Hotel', city: 'Delhi', price: 1500, image: `${c}` },
    { name: 'JW Marriott', city: 'Delhi', price: 3500, image: `${d}` },
    { name: 'The Paradise', city: 'Delhi', price: 2000, image: `${e}` },
    
  ];

  const bangaloreHotels = [
    { name: 'Beacon Estate', city: 'Bangalore', price: 1500, image: `${q}` },
    { name: 'West End Hotel', city: 'Bangalore', price: 3500, image: `${r}` },
    { name: 'Orchid Palace', city: 'Bangalore', price: 2000, image: `${u}` },
    
  ];

  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [cityFilter, setCityFilter] = useState('');

  const filterHotelsByPrice = (hotels) => {
    let filteredHotels = hotels;

    if (minPrice !== null && maxPrice !== null) {
      filteredHotels = filteredHotels.filter(hotel => hotel.price >= minPrice && hotel.price <= maxPrice);
    }

    if (cityFilter !== '') {
      filteredHotels = filteredHotels.filter(hotel => hotel.city.toLowerCase() === cityFilter.toLowerCase());
    }

    return filteredHotels;
  };

  const renderHotelCards = (hotels) => {
    const filteredHotels = filterHotelsByPrice(hotels);
    return filteredHotels.map(hotel => (
      <HotelCard
        key={hotel.name}
        name={hotel.name}
        price={hotel.price}
        image={hotel.image}
        city={hotel.city}
      />
    ));
  };

  const handleAddToCart = (pkg) => {
    addToCart(pkg);
  };

  return (
    <section className="packages" id="packages">
      <h1 className="heading">
        <span>P</span>
        <span>A</span>
        <span>C</span>
        <span>K</span>
        <span>A</span>
        <span>G</span>
        <span>E</span>
        <span>S</span>
      </h1>
      <div className="price-filter">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice || ''}
          onChange={e => setMinPrice(e.target.value === '' ? null : parseInt(e.target.value))}
          className="price-input"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice || ''}
          onChange={e => setMaxPrice(e.target.value === '' ? null : parseInt(e.target.value))}
          className="price-input"
        />
        <input
          type="text"
          placeholder="Enter city name"
          onChange={e => setCityFilter(e.target.value)}
          className="city-filter"
        />
      </div>
      <div className="box-container">
        {packages.map((pkg) => (
          <div className="box" key={pkg.id}>
            <img src={pkg.image} alt="" />
            <div className="content">
              <h3><i className="fas fa-map-marker-alt"></i>{pkg.city}</h3>
              <p>{pkg.name}</p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="price">₹{pkg.price}</div>
              <button className="btn" onClick={() => handleAddToCart(pkg)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="box-container">
        {packages.map((pkg) => (
          <div className="box" key={pkg.id}>
            <img src={pkg.image} alt="" />
            <div className="content">
              <h3><i className="fas fa-map-marker-alt"></i>{pkg.city}</h3>
              <p>{pkg.name}</p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="price">₹{pkg.price}</div>
              <button className="btn" onClick={() => handleAddToCart(pkg)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="box-container">
        {packages.map((pkg) => (
          <div className="box" key={pkg.id}>
            <img src={pkg.image} alt="" />
            <div className="content">
              <h3><i className="fas fa-map-marker-alt"></i>{pkg.city}</h3>
              <p>{pkg.name}</p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="price">₹{pkg.price}</div>
              <button className="btn" onClick={() => handleAddToCart(pkg)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      
      
      <h2 className="subheading">Hotels in Mumbai</h2>
      <Container>
        <Row>
          {renderHotelCards(mumbaiHotels)}
        </Row>
      </Container>
      <h2 className="subheading">Hotels in Delhi</h2>
      <Container>
        <Row>
          {renderHotelCards(delhiHotels)}
        </Row>
      </Container>
      <h2 className="subheading">Hotels in Bangalore</h2>
      <Container>
        <Row>
          {renderHotelCards(bangaloreHotels)}
        </Row>
      </Container>
    </section>
  );
}

function HotelCard({ name, price, image, city }) {
  return (
    <Col md={6} lg={4} className="mb-4">
      <div className="hotel-card">
        <img src={image} alt={name} className="hotel-image" />
        <div className="hotel-info">
          <h3>{name}</h3>
          <p>City: {city}</p>
          <p>Price: ₹{price}</p>
        </div>
      </div>
    </Col>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCartItems(prevItems => prevItems.filter(cartItem => cartItem.id !== item.id));
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div>
      <Header totalItems={cartItems.length} openCartModal={openCartModal} />
      <HomeSection />
      <PackagesSection addToCart={addToCart} />
      {isCartModalOpen && (
        <CartModal cartItems={cartItems} closeModal={closeCartModal} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}
const RatingComponent = ({ message }) => {
  return (
      <div>
          <p>{message}</p>
      </div>
  );
};

function ReviewSection() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');
  const [review, setReview] = useState('');

  const handleRatingChange = (newRating) => {
      setRating(newRating);
      switch (newRating) {
          case 1:
              setMessage('I just hated.');
              break;
          case 2:
              setMessage('I dont like it.');
              break;
          case 3:
              setMessage('Average.');
              break;
          case 4:
              setMessage('Very Good.');
              break;
          case 5:
              setMessage('I just love It.');
              break;
          default:
              setMessage('');
      }
  };

  const handleCancel = () => {
      setRating(0);
      setMessage('');
      setText('');
      setReview('');
  };

  const handleTextChange = (event) => {
      setText(event.target.value);
  };

  const handleSubmit = () => {
      setReview(`Rating: ${rating}, Review: ${text}`);
  };

  return (
      <section className="review" id="review">
          <h1 className="heading">
              <span>R</span>
              <span>E</span>
              <span>V</span>
              <span>I</span>
              <span>E</span>
              <span>W</span>
          </h1>
          <Container fluid>
              <Row className='justify-content-center'>
                  <Col></Col>
                  <Col className='title justify-content-center'>
                      {[1, 2, 3, 4, 5].map((star) => (
                          <span
                              key={star}
                              style={{
                                  cursor: 'pointer',
                                  color: star <= rating ? 'gold' : 'white',
                                  fontSize: '40px',
                                  marginRight: '5px',
                                  animation: 'starAnimation 0.5s'
                              }}
                              onClick={() => handleRatingChange(star)}
                          >
                              &#9733;
                          </span>
                      ))}
                      <p className='msg'>{message}</p>
                      <textarea placeholder='Describe your experience' value={text} onChange={handleTextChange}></textarea>
                      <RatingComponent />
                      <Button onClick={handleSubmit}>Submit</Button>
                      <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                  </Col>

                  <Col>

                  </Col>

              </Row>
              <Row>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Always use travel online to book our holidays so easy to use and they have some great value packages </p>
                  </Col>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Great services..</p>
                  </Col>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Very fast responses and easy to deal with.</p>
                  </Col>
              </Row>
              <Row>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Booking got Cancelled but was rescheduled no complaints and everything was good.</p>
                  </Col>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Very responsive are holiday run so smoothly without any hassels and we had a fantastic time.</p>
                  </Col>
                  <Col className='titlee'>
                      <span className='rate'><img className='rate' src={star} /></span>
                      <br></br>
                      <p className='xt'>Not Satisfied.</p>
                  </Col>
              </Row>
          </Container>
      </section>
  );
}

function Footer() {
  return (
    <section class="footer">

        <div class="box-container">
            
            <div class="box">
                <h3>about us</h3>
                <p>Welcome to our travel booking website, your one-stop destination for planning and booking your next adventure. Whether you're dreaming of a tropical escape, a city break, or a cultural journey, we're here to make your travel aspirations a reality.
                </p>
            </div>
            <div class="box">
                <h3>branch locations</h3>
                <a href="#">india</a>
                <a href="#">USA</a>
                <a href="#">japan</a>
                <a href="#">france</a>
            </div>
            <div class="box">
                <h3>quick links</h3>
                <a href="#">home</a>
                <a href="#">book</a>
                <a href="#">packages</a>
                <a href="#">services</a>
                <a href="#">gallery</a>
                <a href="#">review</a>
                <a href="#">contact</a>
            </div>
            <div class="box">
                <h3>follow us</h3>
                <a href="#">home</a>
                <a href="#">book</a>
                <a href="#">facebook</a>
                <a href="#">instagram</a>
                <a href="#">twitter</a>
                <a href="#">linkedin</a>
            </div>
        </div>
        <h1 class="credit"> created by <span> Neeshu/Nandini/Muskan </span> | all rights reserved! </h1>
    </section>
  );
}


export default App;


// import React, { useState } from 'react';
// import HotelCard from './HotelCard';
// import hotel from './images/hotel.jpeg';
// // import backgroundImage from './images/back.jpg';

// const App = () => {

//   const mumbaiHotels = [
//     { 
//       name: 'Hotel Sea View', 
//       city: 'Mumbai' ,
//       price: 1500, 
//       image: `${hotel}` 
//     },
//     { 
//       name: 'Holiday Inn', 
//       city: 'Mumbai',
//       price: 3500, 
//       image: `${hotel}` 
//     },
//     { 
//       name: 'Ramada Palace', 
//       city: 'Mumbai', 
//       price: 2000, 
//       image: `${hotel}` 
//     },
//     { 
//       name: 'The Lalit', 
//       city: 'Mumbai',
//       price: 5000, 
//       image: `${hotel}` 
//     },    
//     // Add more hotel objects for Mumbai as needed
//   ];

//   const delhiHotels = [
//     { 
//       name: 'Radisson Hotel', 
//       city: 'Delhi' ,
//       price: 1500, 
//       image: `${hotel}` 
//     },
//     { 
//       name: 'JW Marriott', 
//       city: 'Delhi',
//       price: 3500, 
//       image: `${hotel}` 
//     },
//     { 
//       name: 'The Paradise', 
//       city: 'Delhi',
//       price: 2000, 
//       image: `${hotel}` 
//     },
//     { 
//       name: 'TownHouse', 
//       city: 'Delhi',
//       price: 5000, 
//       image: `${hotel}` 
//     },
//     // Add more hotel objects for Delhi as needed
//   ];

//   const bangaloreHotels = [
//     { 
//       name: 'Beacon Estate', 
//       city: 'Bangalore' ,
//       price: 1500, 
//       image: `${hotel}` 
//     },
//     { 
//       name: 'West End Hotel', 
//       city: 'Bangalore',
//       price: 3500, 
//       image: `${hotel}` 
//     },
//     { 
//       name: 'Orchid Palace', 
//       city: 'Bangalore',
//       price: 2000, 
//       image: `${hotel}` 
//     },
//     { 
//       name: 'The TAJ', 
//       city: 'Bangalore',
//       price: 5000, 
//       image: `${hotel}` 
//     },
//     // Add more hotel objects for Bangalore as needed
//   ];

//   // State to hold the price range
//   const [minPrice, setMinPrice] = useState(null);
//   const [maxPrice, setMaxPrice] = useState(null);
//   const [cityFilter, setCityFilter] = useState('');

//   // Function to filter hotels based on price range
//   const filterHotelsByPrice = (hotels) => {
//     let filteredHotels = hotels;
  
//     // Filter by price range
//     if (minPrice !== null && maxPrice !== null) {
//       filteredHotels = filteredHotels.filter(hotel => hotel.price >= minPrice && hotel.price <= maxPrice);
//     }
  
//     // Filter by city
//     if (cityFilter !== '') {
//       filteredHotels = filteredHotels.filter(hotel => hotel.city.toLowerCase() === cityFilter.toLowerCase());
//     }
  
//     return filteredHotels;
//   };
  
//   // State to hold whether the search button has been clicked
// const [searchClicked, setSearchClicked] = useState(false);

// // Function to handle the search button click
// const handleSearch = () => {
//   // Set the searchClicked state to true
//   setSearchClicked(true);
// };

// // Render hotel cards for Mumbai hotels
// const renderMumbaiHotelCards = () => {
//   // Render hotel cards only if search button has been clicked
//   if (searchClicked) {
//     const filteredHotels = filterHotelsByPrice(mumbaiHotels);
//     return filteredHotels.map(hotel => (
//       <HotelCard
//         key={hotel.name}
//         name={hotel.name}
//         price={hotel.price}
//         image={hotel.image}
//         city={hotel.city}
//       />
//     ));
//   }
//   return null;
// };

// // Render hotel cards for Delhi hotels
// const renderDelhiHotelCards = () => {
//   // Render hotel cards only if search button has been clicked
//   if (searchClicked) {
//     const filteredHotels = filterHotelsByPrice(delhiHotels);
//     return filteredHotels.map(hotel => (
//       <HotelCard
//         key={hotel.name}
//         name={hotel.name}
//         price={hotel.price}
//         image={hotel.image}
//         city={hotel.city}
//       />
//     ));
//   }
//   return null;
// };

// // Render hotel cards for Bangalore hotels
// const renderBangaloreHotelCards = () => {
//   // Render hotel cards only if search button has been clicked
//   if (searchClicked) {
//     const filteredHotels = filterHotelsByPrice(bangaloreHotels);
//     return filteredHotels.map(hotel => (
//       <HotelCard
//         key={hotel.name}
//         name={hotel.name}
//         price={hotel.price}
//         image={hotel.image}
//         city={hotel.city}
//       />
//     ));
//   }
//   return null;
// };
  
//   return (
//     <div className="app" >
//       <div className="price-filter">
//         <input
//           type="number"
//           placeholder="Min Price"
//           value={minPrice || ''}
//           onChange={e => setMinPrice(e.target.value === '' ? null : parseInt(e.target.value))}
//           className="price-input"
//         />
//         <input
//           type="number"
//           placeholder="Max Price"
//           value={maxPrice || ''}
//           onChange={e => setMaxPrice(e.target.value === '' ? null : parseInt(e.target.value))}
//           className="price-input"
//         />
//         <input
//         type="text"
//         placeholder="Enter city name"
//         onChange={e => setCityFilter(e.target.value)}
//         className="city-filter"
//       />
//         <button onClick={handleSearch} className="search-button">Search</button>
//       </div>
//       <div className="hotel-cards">
//         {/* Render Mumbai hotel cards */}
//         {renderMumbaiHotelCards()}
//         {/* Render Delhi hotel cards */}
//         {renderDelhiHotelCards()}
//         {/* Render Bangalore hotel cards */}
//         {renderBangaloreHotelCards()}
//       </div>
//     </div>
//   );
// };

// export default App;
