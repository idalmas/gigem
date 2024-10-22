import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Home() {
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
                <h1 className="h4 mb-0 text-dark">Gigem</h1>
              </div>
              <div className="col-auto">
                <Link href="/students" className="btn btn-outline-dark me-2">
                  For Students
                </Link>
                <button className="btn btn-outline-dark me-2">Sign In</button>
                <button className="btn text-white" style={{ backgroundColor: 'black' }}>Sign Up</button>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="flex-grow-1 d-flex flex-column justify-content-start pt-5">
        <div className="container">
          <h1 className="display-4 mb-4 fw-bold">Get your essay edited, code written, or logo designed students at top colleges</h1>
          <Link href="https://airtable.com/appXZDsIUpmia1Bbe/pagvf3CVZ3Hyb0zyd/form" className="btn btn-success btn-lg">
            Join the Waitlist
          </Link>
        </div>
      </main>
    </div>
  );
}
