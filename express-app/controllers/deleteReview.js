const Review = require('../models/Review');

async function deleteReview(reviewId, userId) {
  try {
    // First, find the review to ensure the user attempting the delete is the reviewer.
    const review = await Review.findById(reviewId);
    if (!review) {
      throw new Error('Review not found');
    }

    // Check if the requesting user is the reviewer
    if (review.reviewer.toString() !== userId) {
      throw new Error('User is not authorized to delete this review');
    }

    // Proceed with deletion
    await Review.findByIdAndDelete(reviewId);
    return { message: "Review successfully deleted" };
  } catch (error) {
    console.error('Error deleting review:', error);
    throw error; // Throw the error to be handled by the caller
  }
}

module.exports = deleteReview;
