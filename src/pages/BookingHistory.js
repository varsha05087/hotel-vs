function BookingHistory({ bookings, checkoutBooking }) {
  return (
    <div className="booking-history">
      <h2>📋 Booking History</h2>

      {bookings.length === 0 ? (
        <div className="no-bookings">
          <p>No bookings yet! 😊</p>
        </div>
      ) : (
        <div className="bookings-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Room Type</th>
                <th>Phone</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Guests</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.roomType}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.checkIn}</td>
                  <td>{booking.checkOut}</td>
                  <td>{booking.guests}</td>
                  <td className={booking.status === 'Confirmed' ? 'status-confirmed' : 'status-completed'}>
                    {booking.status}
                  </td>
                  <td>
                    {booking.status === 'Confirmed' ? (
                      <button
                        className="checkout-btn"
                        onClick={() => checkoutBooking(booking.id)}
                      >
                        Check Out
                      </button>
                    ) : (
                      <span className="completed-text">✅ Done</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BookingHistory;