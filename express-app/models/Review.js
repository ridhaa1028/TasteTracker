// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: {
    type: String,
    required: true
  },
  reviewerName: {
    type: String,
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
