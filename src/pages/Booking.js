import { useState } from 'react';

function Booking({ addBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: '',
    guests: '',
    checkIn: '',
    checkOut: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.roomType || !formData.checkIn || !formData.checkOut) {
      alert('Please fill all fields!');
      return;
    }
    addBooking(formData);
    setShowPopup(true);
  };

  return (
    <div className="booking-page">
      <h2>📋 Book a Room</h2>

      <div className="booking-form">
        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Room Type</label>
          <select name="roomType" value={formData.roomType} onChange={handleChange}>
            <option value="">Select Room Type</option>
            <option value="Deluxe">Deluxe Room</option>
            <option value="Suite">Suite Room</option>
            <option value="AC">AC Room</option>
            <option value="Non-AC">Non-AC Room</option>
          </select>
        </div>

        <div className="form-group">
          <label>Number of Guests</label>
          <input
            type="number"
            name="guests"
            placeholder="Enter number of guests"
            value={formData.guests}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Check In Date</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Check Out Date</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
          />
        </div>

        <button className="book-btn" onClick={handleSubmit}>
          Book Now 🎉
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>🎉 Booking Confirmed!</h3>
            <p>Name: {formData.name}</p>
            <p>Room: {formData.roomType}</p>
            <p>Check In: {formData.checkIn}</p>
            <p>Check Out: {formData.checkOut}</p>
            <p>Guests: {formData.guests}</p>
            <button className="book-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;