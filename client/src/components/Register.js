import React, { useState } from 'react';
import AuthService from '../services/AuthService';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(username, email, password).then(
      (response) => {
        console.log(response.data);
        window.location.href = "/login"; // Redirect to login page after registration
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
