'use client';

import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';

const AuthStudentsPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.endsWith('@stanford.edu')) {
      setError('Please use a valid Stanford email address.');
      return;
    }

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        // Handle successful sign-up
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        // Handle successful sign-in
      }
      // Redirect or update UI state on success
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'} for Stanford Students</h1>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Stanford Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      {error && <p>{error}</p>}
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
      </button>
    </div>
  );
};

export default AuthStudentsPage;
