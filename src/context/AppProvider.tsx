import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
    isSidebarExpanded: boolean;
    toggleSidebar: () => void;
}

const AppContext = createContext<AppContextType>({
    isSidebarExpanded: false,
    toggleSidebar: () => { },
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarExpanded(prev => !prev);
    };

    return (
        <AppContext.Provider value={{ isSidebarExpanded, toggleSidebar }}>
            {children}
        </AppContext.Provider>
    );
};
