import React, { useState } from 'react';
import '../../App.css';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Call API or perform signup logic here
    console.log('Signup successful!');
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          <br />
          <label>Email:</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <br />
          <label>Password:</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <br />
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="background-image">
        <h1 className='like-subscribe'>LIKE & SUBSCRIBE</h1>
        <img src="your-image-url" alt="Background Image" />
      </div>
    </div>
  );
}