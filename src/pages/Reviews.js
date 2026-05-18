import { useState } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('reviews');
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    name: '',
    room: '',
    rating: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.room || !formData.rating || !formData.message) {
      alert('Please fill all fields!');
      return;
    }
    const newReview = { ...formData, id: Date.now() };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('reviews', JSON.stringify(updated));
    setFormData({ name: '', room: '', rating: '', message: '' });
    alert('Review submitted successfully! ⭐');
  };

  return (
    <div className="reviews-page">
      <h2>⭐ Ratings & Reviews</h2>

      <div className="review-form">
        <h3>Write a Review</h3>

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Room Type</label>
          <select name="room" value={formData.room} onChange={handleChange}>
            <option value="">Select Room</option>
            <option value="Deluxe">Deluxe Room</option>
            <option value="Suite">Suite Room</option>
            <option value="AC">AC Room</option>
            <option value="Non-AC">Non-AC Room</option>
          </select>
        </div>

        <div className="form-group">
          <label>Rating</label>
          <select name="rating" value={formData.rating} onChange={handleChange}>
            <option value="">Select Rating</option>
            <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
            <option value="4">⭐⭐⭐⭐ 4 - Very Good</option>
            <option value="3">⭐⭐⭐ 3 - Good</option>
            <option value="2">⭐⭐ 2 - Average</option>
            <option value="1">⭐ 1 - Poor</option>
          </select>
        </div>

        <div className="form-group">
          <label>Your Review</label>
          <textarea
            name="message"
            placeholder="Write your review here..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button className="book-btn" onClick={handleSubmit}>
          Submit Review ⭐
        </button>
      </div>

      <div className="reviews-list">
        <h3>Customer Reviews</h3>
        {reviews.length === 0 ? (
          <div className="no-bookings">
            <p>No reviews yet! Be the first to review! 😊</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-top">
                <h4>{review.name}</h4>
                <span className="review-room">{review.room} Room</span>
              </div>
              <p className="review-rating">
                {'⭐'.repeat(Number(review.rating))} ({review.rating}/5)
              </p>
              <p className="review-message">{review.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Reviews;