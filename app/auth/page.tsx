'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${isSignUp ? 'Sign up' : 'Sign in'} with:`, { email, password });
    router.push('/dashboard');
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#E8F5E9' }}>
      <div className="px-4 py-4">
        <header style={{
          background: 'rgba(128, 128, 128, 0.2)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '20px 30px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(128, 128, 128, 0.3)'
        }}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col">
                <Link href="/" className="text-decoration-none">
                  <h1 className="h4 mb-0 text-dark">Gigem</h1>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="flex-grow-1 d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-center mb-4">
                    {isSignUp ? 'Create your account' : 'Sign in to your account'}
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                      {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                  </form>
                  <div className="text-center mt-3">
                    <button
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="btn btn-link"
                    >
                      {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
