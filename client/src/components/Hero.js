
import heroImage from './hero.jpg';
import React from 'react';
import { Link } from 'react-scroll';

function Hero({ isLoggedIn, openLoginModal }) {
  const handleLoginClick = () => {
    openLoginModal();
  };

  return (
    <div id="hero"
      className="w-screen h-screen text-black flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="my-4 text-7xl font-bold leading-tight">{'Welcome to TasteTracker'}</h1>
        <p className="text-3xl mb-8 font-bold">{'Rate any restaurant and view other ratings!'}</p>
        <div className="flex justify-center mx-auto">
          {isLoggedIn ? (
            <Link
              to="reviewForm"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:underline bg-black text-white font-bold rounded-full py-4 px-8 border-2 border-black"
            >
              Write a Review
            </Link>
          ) : (
            <button
              onClick={handleLoginClick}
              className="hover:underline bg-black text-white font-bold rounded-full py-4 px-8 border-2 border-black"
            >
              Login to Write a Review
            </button>
          )}
          <Link
            to="reviewList"
            spy={true}
            smooth={true}
            duration={500}
            className=" ml-4 hover:underline bg-black text-white font-bold rounded-full py-4 px-8 border-2 border-black"
          >
            View Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
