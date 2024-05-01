const API_URL = 'http://localhost:3001/api/reviews/';

const getReviews = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    return [];
  }
};

const createReview = async (reviewData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
    if (!response.ok) {
      throw new Error('Failed to create review');
    }
    const newReview = await response.json();
    return newReview;
  } catch (error) {
    console.error('Error creating review:', error.message);
    throw error;
  }
};

export default {
  getReviews,
  createReview,
};