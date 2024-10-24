'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Job {
  id: string;
  title: string;
  description: string;
}

export default function AvailableJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const mockJobs: Job[] = [
      { id: '1', title: 'Essay Editing', description: 'Edit a 5-page essay on climate change' },
      { id: '2', title: 'Code Review', description: 'Review a React component for best practices' },
      { id: '3', title: 'Logo Design', description: 'Create a logo for a new tech startup' },
    ];
    setJobs(mockJobs);
  }, []);

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
                <Link href="/dashboard" className="text-decoration-none">
                  <h1 className="h4 mb-0 text-dark">Gigem</h1>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="flex-grow-1 d-flex flex-column justify-content-start pt-5">
        <div className="container">
          <h1 className="display-4 mb-4 fw-bold text-center">Available Jobs</h1>
          <div className="list-group">
            {jobs.map((job) => (
              <Link href={`/job/${job.id}`} key={job.id} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{job.title}</h5>
                </div>
                <p className="mb-1">{job.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
