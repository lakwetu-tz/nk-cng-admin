import React from 'react';
import DashLayout from './layout/DashLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/welcome/LogIn';
import RegisterPage from './pages/welcome/Register';
import Dashboard from './pages/dashboard/DashBoard';
import MainLayout from './layout/MainLayout';
import UserPage from './pages/users/UserPage';
import PayPage from './pages/payment/PayPage';
import VehiclePage from './pages/vehicle/VehiclePage';
import Report from './pages/report /Report';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<DashLayout /> }>
          <Route index element={<Dashboard />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/user" element={<UserPage />} />
          <Route path="/payment" element={<PayPage />} />
          <Route path="/vehicles" element={<VehiclePage />} />
          <Route path="/report" element={<Report />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;