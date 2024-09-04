import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import ApplicationFormsManagement from './components/ApplicationFormsManagement';  // Import ApplicationFormsManagement
import FormCreation from './components/CreateNewForm'; // Import the FormCreation component
import AddField from './components/AddField';

import ErrorBoundary from './components/ErrorBoundary';  

function App() {
  return (
    <Routes>
      <Route path="/add-field" element={<AddField />} />

      <Route 
        path="/application-forms-management" 
        element={
          <ErrorBoundary>
            <ApplicationFormsManagement />  {/* Route for ApplicationFormsManagement */}
          </ErrorBoundary>
        } 
      />
      <Route 
        path="/create-new-form" 
        element={
          <ErrorBoundary>
            <FormCreation />  {/* Route for FormCreation */}
          </ErrorBoundary>
        } 
      />

      <Route path="/" element={<Navigate to="/application-forms-management" />} /> {/* Redirect to application-forms-management by default */}
    </Routes>
  );
}

export default App;
