const Review = require('../models/Review');

async function getAllReviews() {
  return await Review.find();
}

module.exports = getAllReviews;
