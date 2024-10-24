'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface College {
  id: string;
  name: string;
}

const colleges: College[] = [
  { id: 'harvard', name: 'Harvard University' },
  { id: 'mit', name: 'Massachusetts Institute of Technology' },
  { id: 'stanford', name: 'Stanford University' },
  { id: 'berkeley', name: 'University of California, Berkeley' },
  { id: 'princeton', name: 'Princeton University' },
];

export default function CreateJob() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [relevantLinks, setRelevantLinks] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newJob = {
      id: Date.now().toString(),
      title: jobTitle,
      description: jobDescription,
      links: relevantLinks,
      college: selectedCollege,
    };
    
    // Get existing jobs from localStorage
    const existingJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    
    // Add new job to the array
    const updatedJobs = [...existingJobs, newJob];
    
    // Save updated jobs array to localStorage
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    
    // Redirect to dashboard after job creation
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
                <Link href="/dashboard" className="text-decoration-none">
                  <h1 className="h4 mb-0 text-dark">Gigem</h1>
                </Link>
              </div>
              <div className="col-auto">
                <Link href="/dashboard" className="btn btn-outline-dark">Back to Dashboard</Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="flex-grow-1 d-flex flex-column justify-content-start pt-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Create a New Job</h1>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="jobTitle" className="form-label">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="jobDescription" className="form-label">Job Description</label>
                  <textarea
                    className="form-control"
                    id="jobDescription"
                    rows={3}
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="relevantLinks" className="form-label">Relevant Links</label>
                  <input
                    type="text"
                    className="form-control"
                    id="relevantLinks"
                    value={relevantLinks}
                    onChange={(e) => setRelevantLinks(e.target.value)}
                    placeholder="Comma-separated list of URLs"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="eligibleCollege" className="form-label">Eligible College</label>
                  <select
                    className="form-select"
                    id="eligibleCollege"
                    value={selectedCollege}
                    onChange={(e) => setSelectedCollege(e.target.value)}
                    required
                  >
                    <option value="">Select a college</option>
                    {colleges.map(college => (
                      <option key={college.id} value={college.id}>
                        {college.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-success">Create Job</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
