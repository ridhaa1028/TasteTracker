const Review = require('../models/Review');

async function deleteReview(id) {
  return await Review.findByIdAndDelete(id);
}

module.exports = deleteReview;
