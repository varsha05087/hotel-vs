function Billing({ bookings }) {
  const roomPrices = {
    Deluxe: 2999,
    Suite: 5999,
    AC: 1999,
    'Non-AC': 999
  };

  const calculateDays = (checkIn, checkOut) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 1;
  };

  const calculateTotal = (booking) => {
    const days = calculateDays(booking.checkIn, booking.checkOut);
    const price = roomPrices[booking.roomType] || 0;
    return days * price;
  };

  return (
    <div className="billing-page">
      <h2>💰 Billing</h2>

      {bookings.length === 0 ? (
        <div className="no-bookings">
          <p>No bookings yet! Book a room first! 😊</p>
        </div>
      ) : (
        bookings.map((booking) => (
          <div className="bill-card" key={booking.id}>
            <div className="bill-header">
              <h3>🏨 Hotel VS</h3>
              <span>Bill #{booking.id}</span>
            </div>
            <div className="bill-details">
              <div className="bill-row">
                <span>Customer Name</span>
                <span>{booking.name}</span>
              </div>
              <div className="bill-row">
                <span>Phone</span>
                <span>{booking.phone}</span>
              </div>
              <div className="bill-row">
                <span>Room Type</span>
                <span>{booking.roomType}</span>
              </div>
              <div className="bill-row">
                <span>Guests</span>
                <span>{booking.guests}</span>
              </div>
              <div className="bill-row">
                <span>Check In</span>
                <span>{booking.checkIn}</span>
              </div>
              <div className="bill-row">
                <span>Check Out</span>
                <span>{booking.checkOut}</span>
              </div>
              <div className="bill-row">
                <span>Number of Days</span>
                <span>{calculateDays(booking.checkIn, booking.checkOut)} days</span>
              </div>
              <div className="bill-row">
                <span>Price per Night</span>
                <span>₹{roomPrices[booking.roomType]}</span>
              </div>
            </div>
            <div className="bill-total">
              <span>Total Amount</span>
              <span>₹{calculateTotal(booking)}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Billing;