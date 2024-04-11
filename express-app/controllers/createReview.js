// controllers/createReview.js
const Review = require('../models/Review');

async function createReview(restaurantName, rating, reviewText, reviewerName) {
  const newReview = new Review({ restaurantName, rating, reviewText, reviewerName });
  await newReview.save();
  return newReview;
}

module.exports = createReview;