import React, { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import Sidebar from '../components/SideBar';
import NavBar from '../components/NavBar';
import { useAppContext } from '../context/AppProvider';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user } = useAuth();

    const { isSidebarExpanded } = useAppContext();

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <NavBar />
                <div className={`py-16 flex-1 ${isSidebarExpanded ? "px-4" : "px-24"}`}>
                    <Outlet /></div>
            </div>
        </div>
    );
};

export default ProtectedRoute;
