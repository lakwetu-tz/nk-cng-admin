import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

import { useAppContext } from '../context/AppProvider';


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