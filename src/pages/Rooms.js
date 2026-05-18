import { useState } from 'react';
import roomsData from '../data/roomsData';

function Rooms({ wishlist, toggleWishlist, bookings, setPage }) {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');
  const [sortPrice, setSortPrice] = useState('');

  const getBookedCount = (type) => {
    return bookings.filter((b) => b.roomType === type && b.status === 'Confirmed').length;
  };
  const getAvailableCount = (room) => {
    const booked = getBookedCount(room.type);
    return room.totalRooms - booked;
  };

  const filteredRooms = roomsData
    .filter((room) =>
      room.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((room) =>
      filterType ? room.type === filterType : true
    )
    .sort((a, b) => {
      if (sortPrice === 'low') return a.price - b.price;
      if (sortPrice === 'high') return b.price - a.price;
      return 0;
    });

  const isWishlisted = (id) => wishlist.find((item) => item.id === id);

  return (
    <div className="rooms-page">
      <h2>🛏️ All Rooms</h2>

      <div className="filters">
        <input
          className="search-box"
          type="text"
          placeholder="Search rooms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>

        <select
          className="filter-select"
          value={sortPrice}
          onChange={(e) => setSortPrice(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="rooms-grid">
        {filteredRooms.length === 0 ? (
          <p className="no-results">No rooms found! 😊</p>
        ) : (
          filteredRooms.map((room) => {
            const available = getAvailableCount(room);
            return (
              <div className="room-card" key={room.id}>
                <div className="room-info">
                  <div className="room-top">
                    <h3>{room.name}</h3>
                    <span
                      className="heart"
                      onClick={() => toggleWishlist(room)}
                    >
                      {isWishlisted(room.id) ? '❤️' : '🤍'}
                    </span>
                  </div>
                  <p>{room.description}</p>
                  <p className="price">₹{room.price} / night</p>
                  <p className="rating">⭐ {room.rating}</p>

                  <div className="availability-bar">
                    <p className={available > 0 ? 'available' : 'booked'}>
                      {available > 0
                        ? `✅ ${available} out of ${room.totalRooms} Available`
                        : '❌ No Rooms Available'}
                    </p>
                    <div className="bar">
                      {Array.from({ length: room.totalRooms }).map((_, i) => (
                        <div
                          key={i}
                          className={`bar-slot ${i < available ? 'bar-available' : 'bar-booked'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="amenities">
                    {room.amenities.map((amenity) => (
                      <span key={amenity}>{amenity}</span>
                    ))}
                  </div>

                  <button
                    className="book-btn"
                    disabled={available === 0}
                    style={{ opacity: available === 0 ? 0.5 : 1 }}
                    onClick={() => available > 0 && setPage('bookings')}
                  >
                    {available === 0 ? 'Not Available' : 'Book Now'}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Rooms;