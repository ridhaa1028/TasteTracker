const express = require('express');
const router = express.Router();
const {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview
} = require('../controllers');

// Route to create a new review
router.post('/', async (req, res) => {
  const { restaurantName, date, reviewText, rating } = req.body;
  try {
    const newReview = await createReview(restaurantName, date, reviewText, rating);
    res.status(201).json(newReview);
  } catch (err) {
    console.error('Error creating review', err);
    res.status(500).send('Internal Server Error');
  }
});

// Route to get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await getAllReviews();
    res.json(reviews);
  } catch (err) {
    console.error('Error getting reviews', err);
    res.status(500).send('Internal Server Error');
  }
});

// Route to update a review
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { restaurantName, date, reviewText, rating } = req.body;
  try {
    const updatedReview = await updateReview(id, restaurantName, date, reviewText, rating);
    if (!updatedReview) {
      res.status(404).send('Review not found');
    } else {
      res.json(updatedReview);
    }
  } catch (err) {
    console.error('Error updating review', err);
    res.status(500).send('Internal Server Error');
  }
});

// Route to delete a review
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedReview = await deleteReview(id);
    if (!deletedReview) {
      res.status(404).send('Review not found');
    } else {
      res.json(deletedReview);
    }
  } catch (err) {
    console.error('Error deleting review', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
