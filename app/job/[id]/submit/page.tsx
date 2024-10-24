'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Job {
  id: string;
  title: string;
  description: string;
  links: string[];
}

export default function SubmitJob({ params }: { params: { id: string } }) {
  const [job, setJob] = useState<Job | null>(null);
  const [workProduct, setWorkProduct] = useState('');
  const router = useRouter();

  useEffect(() => {
    // In a real app, you'd fetch this from an API
    const mockJob: Job = {
      id: params.id,
      title: 'Essay Editing',
      description: 'Edit a 5-page essay on climate change',
      links: ['https://example.com/essay-doc', 'https://example.com/style-guide'],
    };
    setJob(mockJob);
  }, [params.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Submitted work for job ${params.id}:`, workProduct);
    localStorage.removeItem(`acceptedJob_${params.id}`);
    router.push('/dashboard');
  };

  if (!job) return <div>Loading...</div>;

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
        <div className="container" style={{ maxWidth: '700px', paddingRight: '50px' }}>
          <h1 className="display-4 mb-4 fw-bold">{job.title}</h1>
          <p className="lead mb-4">{job.description}</p>
          <h2 className="h5 mt-4 mb-3">Relevant Links:</h2>
          <ul className="list-group mb-4">
            {job.links.map((link, index) => (
              <li key={index} className="list-group-item">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-success">{link}</a>
              </li>
            ))}
          </ul>
          <h2 className="h4 mb-4">Submit Completed Work</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="workProduct" className="form-label">Completed Work</label>
              <textarea
                className="form-control"
                id="workProduct"
                rows={10}
                value={workProduct}
                onChange={(e) => setWorkProduct(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="d-grid gap-2 col-6 mx-0">
              <button type="submit" className="btn btn-success btn-lg">Submit Work</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}