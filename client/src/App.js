import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList'; // Corrected import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import LoginModal from './components/LoginModal';
import Register from './components/Register';
import ReviewService from './services/ReviewService';
import AuthService from './services/AuthService' 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isLoggedIn());
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews when component mounts
    ReviewService.getReviews().then(reviews => {
      setReviews(reviews);
    });
  }, []);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleLogout = () => {
    AuthService.logout(); // Logout user
    setIsLoggedIn(false); // Update isLoggedIn state
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <Hero isLoggedIn={isLoggedIn} openLoginModal={openLoginModal} />
        {isLoggedIn && (
          <Element name="reviewForm">
            <ReviewForm />
          </Element>
        )} {/* Conditionally render ReviewForm */}
        <ReviewList reviews={reviews} />
        {showLoginModal && <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />}
      </div>
    </Router>
  );
}

export default App;

