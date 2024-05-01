import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Get the email from localStorage
    const email = JSON.parse(localStorage.getItem('user')).email;

    // Destructure formData to get subject and message
    const { name, subject, message } = formData;

    // Send the review data along with the email to the backend
    const response = await axios.post('http://localhost:3001/api/contacts', {
      name,
      email,
      subject,
      message,
    });

    console.log('Contact form submitted successfully:', response.data);
    // Optionally, you can redirect the user to another page or display a success message
  } catch (error) {
    console.error('Error submitting contact form:', error.message);
    // Optionally, you can display an error message to the user
  }
};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">Contact The Creator</h2>
        <p className="text-sm text-gray-700 mb-6">
          The creator of this project is a computer science graduate from Rowan University.
          Feel free to contact the creator about any questions you might have about the tech stack used,
          project suggestions, or any other inquiries. 
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></textarea>
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ContactModal;


