import React, { useState } from 'react';
import '../../App.css';

export default function Authentication() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    if (password!== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Call API or perform signup logic here
    console.log('Signup successful!');
  };

  const handleSubmitSignIn = (event) => {
    event.preventDefault();
    // Call API or perform signin logic here
    console.log('Signin successful!');
  };

  return (
    <div className="authentication-container">
      <div className="buttons">
        <button onClick={() => setShowSignUp(true)}>Sign Up</button>
        <button onClick={() => setShowSignUp(false)}>Sign In</button>
      </div>
      {showSignUp? (
        <div className="sign-up-container">
          <div className="sign-up-form">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmitSignUp}>
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
        </div>
      ) : (
        <div className="sign-in-container">
          <div className="sign-in-form">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmitSignIn}>
              <label>Email:</label>
              <input type="email" value={signInEmail} onChange={(event) => setSignInEmail(event.target.value)} />
              <br />
              <label>Password:</label>
              <input type="password" value={signInPassword} onChange={(event) => setSignInPassword(event.target.value)} />
              <br />
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}