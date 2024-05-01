import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import AboutModal from './AboutModal';
import ContactModal from './ContactModal'; // Import the ContactModal component

function Header({ isLoggedIn, onLogin, onLogout }) {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const openAboutModal = () => {
    setShowAboutModal(true);
  };

  const closeAboutModal = () => {
    setShowAboutModal(false);
  };

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  return (
    <header className="bg-black p-4 flex items-center fixed w-full top-0 z-10 justify-between">
      <div className="flex items-center">
        <h1 className="text-white font-bold text-3xl">TasteTracker</h1>
      </div>
      <div className="flex items-center">
        {isLoggedIn && (
          <>
            <button onClick={onLogout} className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-xl font-medium">Logout</button>
            <button onClick={openContactModal} className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-xl font-medium">Contact</button>
          </>
        )}
      <button onClick={openAboutModal} className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-xl font-medium">About</button>
      </div>
      <Modal
        isOpen={showAboutModal}
        onRequestClose={closeAboutModal}
        className="modal"
        overlayClassName="overlay"
      >
        {showAboutModal && <AboutModal onClose={closeAboutModal} />}
      </Modal>
      <ContactModal isOpen={showContactModal} onClose={closeContactModal} /> {/* Render ContactModal */}
    </header>
  );
}

export default Header;


