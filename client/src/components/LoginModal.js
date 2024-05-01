import React, { useState } from 'react';
import authService from '../services/AuthService';

const Modal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await authService.register(username, email, password);
      console.log('Registration successful:', response.data);
      onClose();
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await authService.login(loginEmail, loginPassword);
      console.log('Login successful, token:', response.token);
      // Optionally, you can add code here to handle the successful login
      onClose();
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded">
            <button className="absolute top-0 right-0 m-4" onClick={onClose}>Close</button>
            <h2 className="text-2xl font-bold mb-4">Login or Register</h2>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 rounded px-3 py-2 mb-2 block w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-3 py-2 mb-2 block w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded px-3 py-2 mb-4 block w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister} className="bg-gray-800 text-white rounded px-4 py-2 mb-4 block w-full">Register</button>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-3 py-2 mb-2 block w-full"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded px-3 py-2 mb-4 block w-full"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="bg-gray-800 text-white rounded px-4 py-2 mb-4 block w-full">Login</button>
            <button className="bg-gray-300 text-black rounded px-4 py-2 block w-full" onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;


