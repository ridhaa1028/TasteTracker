import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import axios from 'axios';

function ReviewForm() {
  const [restaurantName, setRestaurantName] = useState('');
  const [rating, setRating] = useState('');
  const [experience, setExperience] = useState('');

  useEffect(() => {
    const storedRestaurantName = sessionStorage.getItem('restaurantName');
    const storedRating = sessionStorage.getItem('rating');
    const storedExperience = sessionStorage.getItem('experience');

    if (storedRestaurantName) setRestaurantName(storedRestaurantName);
    if (storedRating) setRating(storedRating);
    if (storedExperience) setExperience(storedExperience);
  }, []);


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Get the username from localStorage
    const reviewer = JSON.parse(localStorage.getItem('user')).username.toString();

    // Send the review data along with the username to the backend
    const response = await axios.post('http://localhost:3001/api/reviews', {
      restaurantName,
      rating,
      reviewText: experience, // Assuming "experience" is the review text
      reviewer, // Include the username as reviewer
    });

    console.log('Review created successfully:', response.data);
    
    window.location.reload();
  } catch (error) {
    const username = JSON.parse(localStorage.getItem('user')).username;
    console.error('Error creating review:', error.message);
    console.error('user', username);
    // Optionally, you can display an error message to the user
  }

  
    sessionStorage.removeItem('restaurantName');
    sessionStorage.removeItem('rating');
    sessionStorage.removeItem('experience');
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    sessionStorage.setItem(name, value);
    switch (name) {
      case 'restaurantName':
        setRestaurantName(value);
        break;
      case 'rating':
        setRating(value);
        break;
      case 'experience':
        setExperience(value);
        break;
      default:
        break;
    }
  };

  return (
    <div id="reviewForm" className="bg-gradient-to-br from-red-800 to-orange-500 h-screen flex items-center justify-center">
      <div className="bg-black bg-opacity-80 p-8 rounded-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-white">Write a Review</h2>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="restaurantName" className="block text-lg font-medium text-white">Restaurant Name</label>
              <input
                id="restaurantName"
                type="text"
                name="restaurantName"
                value={restaurantName}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="rating" className="block text-lg font-medium text-white">Rating (out of 5)</label>
              <input
                id="rating"
                type="number"
                min="1"
                max="5"
                name="rating"
                value={rating}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="experience" className="block text-lg font-medium text-white">Describe your experience</label>
              <textarea
                id="experience"
                name="experience"
                value={experience}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-white text-black font-bold rounded-full py-2 px-6 mr-4">Submit</button>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:underline bg-white text-white font-bold rounded-full py-4 px-8 border-2 border-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block -mt-1" fill="black" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;



