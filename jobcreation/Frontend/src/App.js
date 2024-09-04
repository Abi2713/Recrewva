import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import JobCreationForm from './components/JobCreationForm';
import JobDrafts from './pages/JobDrafts';
import PublishedJobs from './pages/PublishedJobs';
import './App.css';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/create-job">Create Job</Link></li>
          <li><Link to="/drafts">Job Drafts</Link></li>
          <li><Link to="/publishedjobs">Published Jobs</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/create-job" element={<JobCreationForm />} />
        <Route path="/drafts" element={<JobDrafts />} />
        <Route path="/publishedjobs" element={<PublishedJobs />} />
        <Route path="/edit-job/:loc/:jobId" element={<JobCreationForm />} />
        <Route path="/view-job/:loc/:jobId" element={< PublishedJobs/>} />

      </Routes>
    </Router>
  );
}

export default App;
