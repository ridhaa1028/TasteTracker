const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/usersManagement');

// POST /api/users/register - Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log("register route password: " + password)
    const result = await registerUser(username, email, password);
    res.status(201).json(result);
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(400).json({ message: error.message });
  }
});

// POST /api/users/login - Login an existing user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await loginUser(email, password);
    if (result.token) {
      res.json(result); // Send token, username, and email to the client
    } else {
      throw new Error('Authentication failed, no token provided');
    }
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(401).json({ message: error.message });
  }
});


module.exports = router;
