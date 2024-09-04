import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/CustomReportsDashboard';
import CreateReport from './components/CreateReport';
import ReportDetails from './components/ReportDetails';
import EditReport from './components/EditReport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-report" element={<CreateReport />} />
        <Route path="/report/:id" element={<ReportDetails />} />
        <Route path="/report/:id/edit" element={<EditReport />} />
      </Routes>
    </Router>
  );
}

export default App;
