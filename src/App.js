import { useState } from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';
import Booking from './pages/Booking';
import BookingHistory from './pages/BookingHistory';
import Wishlist from './pages/Wishlist';
import Reviews from './pages/Reviews';
import Billing from './pages/Billing';
import Login from './pages/Login';
import Welcome from './pages/Welcome';

function App() {
  const [page, setPage] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  return localStorage.getItem('isLoggedIn') === 'true';
});
const [showWelcome, setShowWelcome] = useState(false);
const [sidebarOpen, setSidebarOpen] = useState(true);

const handleLogin = () => {
  setIsLoggedIn(true);
  setShowWelcome(true);
  localStorage.setItem('isLoggedIn', 'true');
};

const handleLogout = () => {
  setIsLoggedIn(false);
  localStorage.removeItem('isLoggedIn');
};
 const [bookings, setBookings] = useState(() => {
  const saved = localStorage.getItem('bookings');
  return saved ? JSON.parse(saved) : [];
});
   const [wishlist, setWishlist] = useState(() => {
  const saved = localStorage.getItem('wishlist');
  return saved ? JSON.parse(saved) : [];
});

const toggleWishlist = (room) => {
  const exists = wishlist.find((item) => item.id === room.id);
  let updated;
  if (exists) {
    updated = wishlist.filter((item) => item.id !== room.id);
  } else {
    updated = [...wishlist, room];
  }
  setWishlist(updated);
  localStorage.setItem('wishlist', JSON.stringify(updated));
};

  const addBooking = (booking) => {
    const newBooking = { ...booking, id: Date.now(), status: 'Confirmed' };
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };
  const checkoutBooking = (id) => {
  const updated = bookings.map((booking) =>
    booking.id === id ? { ...booking, status: 'Completed' } : booking
  );
  setBookings(updated);
  localStorage.setItem('bookings', JSON.stringify(updated));
};

 if (!isLoggedIn) {
  return <Login onLogin={handleLogin} />;
}

if (showWelcome) {
  return <Welcome onEnter={() => setShowWelcome(false)} />;
}

return (
  <div className="app">
    <Sidebar setPage={setPage} page={page} sidebarOpen={sidebarOpen} />
    <div className="main">
      <div className="topbar">
        <div className="topbar-left">
    <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
      ☰
    </button>
    </div>
        <h1>
          {page === 'dashboard' ? '📊 Dashboard' :
           page === 'rooms' ? '🛏️ Rooms' :
           page === 'bookings' ? '📋 Book a Room' :
           page === 'history' ? '📜 Booking History' :
           page === 'wishlist' ? '❤️ Wishlist' :
           page === 'reviews' ? '⭐ Reviews' :
           page === 'billing' ? '💰 Billing' : ''}
        </h1>
        <div className="topbar-right">
          <span>👋 Welcome, Admin</span>
          <div className="avatar">A</div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout 🚪
          </button>
        </div>
      </div>
      {page === 'dashboard' && <Dashboard bookings={bookings} />}
      {page === 'rooms' && <Rooms wishlist={wishlist} toggleWishlist={toggleWishlist} bookings={bookings} setPage={setPage} />}
      {page === 'history' && <BookingHistory bookings={bookings} checkoutBooking={checkoutBooking} />}
      {page === 'bookings' && <Booking addBooking={addBooking} />}
      {page === 'wishlist' && <Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} />}
      {page === 'reviews' && <Reviews />}
      {page === 'billing' && <Billing bookings={bookings} />}
    </div>
  </div>
);
}

export default App;