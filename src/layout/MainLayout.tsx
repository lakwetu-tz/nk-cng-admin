import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";

import { useAppContext } from '../context/AppProvider';


export const MainLayout: React.FC = () => {
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


export default MainLayout