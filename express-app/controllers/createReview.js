const Review = require('../models/Review');

async function createReview(restaurantName, rating, reviewText, reviewer) {
  try {
    const newReview = new Review({ restaurantName, rating, reviewText, reviewer });
    await newReview.save();
    return newReview;
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;  
  }
}

module.exports = createReview;