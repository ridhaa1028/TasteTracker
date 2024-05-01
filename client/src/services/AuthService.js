import axios from 'axios';

const API_URL = 'http://localhost:3001/api/user/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'register', {
    username,
    email,
    password,
  }).then((response) => {
    // If registration is successful, automatically log in the user
    return login(email, password);
  });
};

const login = (email, password) => {
  return axios.post(API_URL + 'login', {
    email,
    password,
  }).then((response) => {
    if (response.data.token) {
      const { token, username, email } = response.data; // Destructure the response data
      console.log('Username:', username);
      localStorage.setItem('user', JSON.stringify({ token, username, email }));
      window.location.reload(); // Refresh the page
    }
    return response.data;
  });
};

// Add a method to check if user is logged in
const isLoggedIn = () => {
  return !!localStorage.getItem('user');
};

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('username');
  localStorage.removeItem('email');
};

export default {
  register,
  login,
  logout,
  isLoggedIn
};
