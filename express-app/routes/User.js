const express = require('express');
const router = express.Router();
const registerUser = require('../controllers/usersManagement');
const loginUser = require('../controllers/usersManagement');

// Route to register a new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await registerUser(username, email, password);
    res.status(201).json(result);
  } catch (err) {
    console.error('Error creating user', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to login a user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await loginUser(email, password);
    res.status(200).json(result);
  } catch (err) {
    console.error('Error logging in user', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
