const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async (username, email, password) => {
  try {
    // Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    // Hash the password
    newUser.password = await bcrypt.hash(password, 8);
    await newUser.save();

    return { message: 'User created successfully' };
  } catch (err) {
    console.error('Error creating user', err);
    throw err;
  }
};

const loginUser = async (email, password) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { token };
  } catch (err) {
    console.error('Error logging in user', err);
    throw err;
  }
};

module.exports = { registerUser, loginUser };
