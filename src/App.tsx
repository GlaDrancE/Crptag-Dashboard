import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashborad';
import RegisterClient from './components/RegisterClient';
import ManageClients from './components/ManageClients';
import ApiKeys from './components/ApiKeys';
import AddTags from './components/AddTags';
import TagsInformation from './components/TagsInformation';
import FraudAnalytics from './components/FraudAnalytics';
import UsageAnalytics from './components/UsageAnalytics';
import UserManagement from './components/UserManagement';
import ApiDocs from './components/ApiDocs';
import AppDocs from './components/AppDocs';
import VerificationFlowDocs from './components/VerificationFlowDocs';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register-client" element={<RegisterClient />} />
        <Route path="/manage-clients" element={<ManageClients />} />
        <Route path="/api-keys" element={<ApiKeys/>} />
        <Route path="/add-tags" element={<AddTags />} />
        <Route path="/tags-information" element={<TagsInformation />} />
        <Route path="/fraud-analytics" element={<FraudAnalytics />} />
        <Route path="/usage-analytics" element={<UsageAnalytics />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/api-docs" element={<ApiDocs />} />
        <Route path="/app-docs" element={<AppDocs />} />
        <Route path="/verification-flow-docs" element={<VerificationFlowDocs />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
