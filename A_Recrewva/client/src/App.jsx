import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import RecruiterDashboard from './components/RecruiterDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import ProfileDashboard from './components/ProfileDashboard';
import JobCreation from './components/JobCreation';
import JobDrafts from './components/JobDrafts';
import PublishedJobs from './components/PublishedJobs';
import CategoryManagement from './components/CategoryManagement';
import ApplicationFormsManagement from './components/ApplicationFormsManagement';
import CreateNewForm from './components/CreateNewForm';
import AddField from './components/AddField';
import InterviewSchedulingDashboard from './components/InterviewSchedulingDashboard'; // Import InterviewSchedulingDashboard
import RecruitmentMetricsDashboard from './components/RecruitmentMetricsDashboard'; // Import RecruitmentMetricsDashboard
import CustomReportsDashboard from './components/CustomReportsDashboard'; // Import CustomReportsDashboard

import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
      <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
      <Route path="/profile" element={<ProfileDashboard />} />
      <Route path="/job-creation" element={<JobCreation />} />
      <Route path="/job-drafts" element={<JobDrafts />} />
      <Route path="/published-jobs" element={<PublishedJobs />} />
      <Route path="/add-field" element={<AddField />} />

      <Route 
        path="/job-categories" 
        element={
          <ErrorBoundary>
            <CategoryManagement />  
          </ErrorBoundary>
        } 
      />
      <Route 
        path="/application-forms-management" 
        element={
          <ErrorBoundary>
            <ApplicationFormsManagement />
          </ErrorBoundary>
        } 
      />
      <Route 
        path="/create-new-form" 
        element={
          <ErrorBoundary>
            <CreateNewForm />  
          </ErrorBoundary>
        } 
      />
      
      {/* New routes added for additional functionalities */}
      <Route path="/interview-scheduling" element={<InterviewSchedulingDashboard />} />
      <Route path="/recruitment-metrics" element={<RecruitmentMetricsDashboard />} />
      <Route path="/custom-reports" element={<CustomReportsDashboard />} />
      <Route path="/application-form" element={<ApplicationFormsManagement />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
