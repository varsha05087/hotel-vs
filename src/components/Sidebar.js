function Sidebar({ page, setPage, sidebarOpen }) {
  return (
    <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <h2>🏨 Hotel VS</h2>
      <ul>
        <li
          className={page === 'dashboard' ? 'active' : ''}
          onClick={() => setPage('dashboard')}
        >
          📊 Dashboard
        </li>
        <li
          className={page === 'rooms' ? 'active' : ''}
          onClick={() => setPage('rooms')}
        >
          🛏️ Rooms
        </li>
        <li
          className={page === 'bookings' ? 'active' : ''}
          onClick={() => setPage('bookings')}
        >
          📋 Bookings
        </li>
        <li
          className={page === 'history' ? 'active' : ''}
          onClick={() => setPage('history')}
        >
          📜 Booking History
        </li>
        <li
          className={page === 'wishlist' ? 'active' : ''}
          onClick={() => setPage('wishlist')}
        >
          ❤️ Wishlist
        </li>
        <li
          className={page === 'reviews' ? 'active' : ''}
          onClick={() => setPage('reviews')}
        >
          ⭐ Reviews
        </li>
        <li
          className={page === 'billing' ? 'active' : ''}
          onClick={() => setPage('billing')}
        >
          💰 Billing
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;