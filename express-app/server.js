const express = require('express');
const mongoose = require('mongoose');
const createReview = require('./controllers/createReview');
const getAllReviews = require('./controllers/getAllReviews');
const updateReview = require('./controllers/updateReview');
const deleteReview = require('./controllers/deleteReview');
const createContact = require('./controllers/createContact');
const getAllContacts = require('./controllers/getAllContacts');
const updateContact = require('./controllers/updateContact');
const deleteContact = require('./controllers/deleteContact');
const Review = require('./models/Review');
const Contact = require('./models/Contact');

const app = express();
const port = 3000;
const uri = "mongodb+srv://rahman13:ZLA4kOhM3eczIGEH@mongodb.12spgep.mongodb.net/?retryWrites=true&w=majority&appName=mongoDB";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: false } };

// Establish Mongoose Connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });


app.use(express.json());

// Routes for reviews
app.post('/reviews', async (req, res) => {
  const { restaurantName, rating, reviewText, reviewerName } = req.body;
  try {
    const newReview = await createReview(restaurantName, rating, reviewText, reviewerName);
    res.status(201).json(newReview);
  } catch (err) {
    console.error('Error creating review', err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const reviews = await getAllReviews();
    res.json(reviews);
  } catch (err) {
    console.error('Error getting reviews', err);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/reviews/:id', async (req, res) => {
  const id = req.params.id;
  const { restaurantName, rating, reviewText, reviewerName } = req.body;
  try {
    const updatedReview = await updateReview(id, restaurantName, rating, reviewText, reviewerName);
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

app.delete('/reviews/:id', async (req, res) => {
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

// Routes for contacts
app.post('/contacts', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const newContact = await createContact(name, email, subject, message);
    res.status(201).json(newContact);
  } catch (err) {
    console.error('Error creating contact', err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/contacts', async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.json(contacts);
  } catch (err) {
    console.error('Error getting contacts', err);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/contacts/:id', async (req, res) => {
  const id = req.params.id;
  const { name, email, subject, message } = req.body;
  try {
    const updatedContact = await updateContact(id, name, email, subject, message);
    if (!updatedContact) {
      res.status(404).send('Contact not found');
    } else {
      res.json(updatedContact);
    }
  } catch (err) {
    console.error('Error updating contact', err);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/contacts/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedContact = await deleteContact(id);
    if (!deletedContact) {
      res.status(404).send('Contact not found');
    } else {
      res.json(deletedContact);
    }
  } catch (err) {
    console.error('Error deleting contact', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;

