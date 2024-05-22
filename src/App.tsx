import React from 'react';
import DashLayout from './layout/DashLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/welcome/LogIn';
import RegisterPage from './pages/welcome/Register';
import Dashboard from './pages/dashboard/DashBoard';
import MainLayout from './layout/MainLayout';
import UserPage from './pages/users/UserPage';
import PayPage from './pages/loan/LoanPage';
import VehiclePage from './pages/vehicle/VehiclePage';
import Report from './pages/report /ReportPage';
import { AuthProvider } from './context/AuthProvider';
import Map from './pages/map/MapPage';

const App: React.FC = () => {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          
            <Route element={<MainLayout />}>
              <Route path="/user" element={<UserPage />} />
              <Route path="/map" element={<Map />} />
              {/* <Route path="/report" element={<Report />} /> */}
              <Route path="/payment" element={<PayPage />} />
              <Route path="/vehicles" element={<VehiclePage />} />
              <Route path="/" element={<DashLayout />}>
                <Route index element={<Dashboard />} />
              </Route>
            </Route>
         
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
          <Route path="/report" element={<Report />} />
              
        </Routes>
      </Router>
    </AuthProvider>

  );
};

export default App;