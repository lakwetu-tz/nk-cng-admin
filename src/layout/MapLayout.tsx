import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

import { useAppContext } from '../context/AppProvider';
import { useAuth } from "../context/AuthProvider";


export const MapLayout: React.FC = () => {
    const { isSidebarExpanded } = useAppContext();

    return (
        <div className="flex h-screen">
            <Sidebar />
            <Outlet />

        </div>

    );
};


export default MapLayout;