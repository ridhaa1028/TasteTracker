const Review = require('../models/Review');

async function updateReview(id, restaurantName, rating, reviewText, reviewerName) {
  return await Review.findByIdAndUpdate(id, { restaurantName, rating, reviewText, reviewerName }, { new: true });
}

module.exports = updateReview;
