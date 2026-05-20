import { MdDashboard, MdBedroomParent, MdBookOnline, MdHistory, MdFavorite, MdStar, MdPayment } from 'react-icons/md';

function Sidebar({ page, setPage, sidebarOpen }) {
  return (
    <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <h2>Hotel VS</h2>
      <ul>
        <li
          className={page === 'dashboard' ? 'active' : ''}
          onClick={() => setPage('dashboard')}
        >
          <MdDashboard className="nav-icon" /> Dashboard
        </li>
        <li
          className={page === 'rooms' ? 'active' : ''}
          onClick={() => setPage('rooms')}
        >
          <MdBedroomParent className="nav-icon" /> Rooms
        </li>
        <li
          className={page === 'bookings' ? 'active' : ''}
          onClick={() => setPage('bookings')}
        >
          <MdBookOnline className="nav-icon" /> Bookings
        </li>
        <li
          className={page === 'history' ? 'active' : ''}
          onClick={() => setPage('history')}
        >
          <MdHistory className="nav-icon" /> Booking History
        </li>
        <li
          className={page === 'wishlist' ? 'active' : ''}
          onClick={() => setPage('wishlist')}
        >
          <MdFavorite className="nav-icon" /> Wishlist
        </li>
        <li
          className={page === 'reviews' ? 'active' : ''}
          onClick={() => setPage('reviews')}
        >
          <MdStar className="nav-icon" /> Reviews
        </li>
        <li
          className={page === 'billing' ? 'active' : ''}
          onClick={() => setPage('billing')}
        >
          <MdPayment className="nav-icon" /> Billing
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;