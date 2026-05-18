function Wishlist({ wishlist, toggleWishlist }) {
  return (
    <div className="rooms-page">
      <h2>❤️ My Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="no-bookings">
          <p>No rooms in wishlist yet! Click ❤️ on any room to save it!</p>
        </div>
      ) : (
        <div className="rooms-grid">
          {wishlist.map((room) => (
            <div className="room-card" key={room.id}>
              <div className="room-info">
                <div className="room-top">
                  <h3>{room.name}</h3>
                  <span
                    className="heart"
                    onClick={() => toggleWishlist(room)}
                  >
                    ❤️
                  </span>
                </div>
                <p>{room.description}</p>
                <p className="price">₹{room.price} / night</p>
                <p className="rating">⭐ {room.rating}</p>
                <div className="amenities">
                  {room.amenities.map((amenity) => (
                    <span key={amenity}>{amenity}</span>
                  ))}
                </div>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;