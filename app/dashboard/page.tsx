'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

interface Job {
  id: string;
  title: string;
}

export default function Dashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push('/');
    } catch (error: any) {
      console.error('Error logging out:', error.message);
    }
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
              <div className="col-auto">
                <button onClick={handleLogout} className="btn btn-outline-dark">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="flex-grow-1 d-flex flex-column justify-content-start pt-5">
        <div className="container">
          <h1 className="display-4 mb-4 fw-bold text-center">Your Dashboard</h1>
          <div className="d-grid gap-2 col-md-6 mx-auto mb-4">
            <Link href="/available-jobs" className="btn btn-success btn-lg">Find Available Jobs</Link>
          </div>
          
          <h2 className="h4 mb-3 text-center">Your Current Jobs</h2>
          {jobs.length > 0 ? (
            <ul className="list-group">
              {jobs.map((job) => (
                <li key={job.id} className="list-group-item">
                  <Link href={`/job/${job.id}`} className="text-decoration-none text-dark">
                    {job.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">You haven't accepted any jobs yet.</p>
          )}
        </div>
      </main>
    </div>
  );
}
