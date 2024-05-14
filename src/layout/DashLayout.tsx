import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

import { useAppContext } from '../context/AppProvider';


export const DashLayout: React.FC = () => {
    const { isSidebarExpanded } = useAppContext();

    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className={`flex-1 ${isSidebarExpanded ? "px-40" : "px-24"}`}>
                <Outlet />
            </div>
        </div>

    );
};


export default DashLayout