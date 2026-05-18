import roomsData from '../data/roomsData';

function Dashboard({ bookings }) {
  const totalRooms = roomsData.reduce((total, room) => total + room.totalRooms, 0);

  const getBookedCount = (type) => {
    return bookings.filter((b) => b.roomType === type && b.status === 'Confirmed').length;
  };

  const totalBooked = roomsData.reduce((total, room) => {
    const booked = getBookedCount(room.type);
    return total + Math.min(booked, room.totalRooms);
  }, 0);

  const totalAvailable = totalRooms - totalBooked;
  const totalBookings = bookings.length;

  const roomPrices = {
    Deluxe: 2999,
    Suite: 5999,
    AC: 1999,
    'Non-AC': 999
  };

  const totalRevenue = bookings.reduce((total, booking) => {
    const start = new Date(booking.checkIn);
    const end = new Date(booking.checkOut);
    const days = (end - start) / (1000 * 60 * 60 * 24) || 1;
    const price = roomPrices[booking.roomType] || 0;
    return total + days * price;
  }, 0);

  return (
    <div>
      <div className="cards">
        <div className="card">
          <h3>Total Rooms</h3>
          <p>{totalRooms}</p>
        </div>
        <div className="card">
          <h3>Available</h3>
          <p>{totalAvailable}</p>
        </div>
        <div className="card">
          <h3>Booked</h3>
          <p>{totalBooked}</p>
        </div>
        <div className="card">
          <h3>Total Bookings</h3>
          <p>{totalBookings}</p>
        </div>
        <div className="card">
          <h3>Total Revenue</h3>
          <p>₹{totalRevenue}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;