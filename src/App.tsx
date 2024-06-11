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
import { AuthProvider, useAuth } from './context/AuthProvider';
import Map from './pages/map/MapPage';
import MapLayout from './layout/MapLayout';
import useScreenWidth from './hooks/useScreen';

const App: React.FC = () => {
  const screenWidth = useScreenWidth();
  const { user } = useAuth();

  // Define the breakpoint for 'sm' screen (TailwindCSS md: 768px)
  const mdBreakpoint = 0;
  const mobileBreakpoint = 640;

  // Check if the screen width falls within the 'md' range
  const isMdScreen = screenWidth >= mdBreakpoint && screenWidth < 724;
  const isMobileScreen = screenWidth < mdBreakpoint;

  if (isMdScreen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold">This application is not available for medium screens.</h1>
          <p>Please use a mobile device.</p>
        </div>
      </div>
    );
  }



  return (
   
      <Router>
        <Routes>
          {!user || !user.token ? (
            <>
             <Route path="/login" element={<LoginPage />} />
             <Route path="/register" element={<RegisterPage />} />
           </>
              ): (
            <>
            <Route element={<MainLayout />}>
                <Route path="/user" element={<UserPage />} />
                <Route path="/report" element={<Report />} />
                <Route path="/payment" element={<PayPage />} />
                <Route path="/vehicles" element={<VehiclePage />} />
            </Route>
              
              <Route path="/map" element={<MapLayout />}>
                <Route index element={<Map />} />
              </Route>
              <Route path="/" element={<DashLayout />}>
                <Route index element={<Dashboard />} />
              </Route>
            </>
          )}
        </Routes>
      </Router>

  );
};

export default App;