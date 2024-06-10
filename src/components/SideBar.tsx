import React, { useState } from "react";
import { navigation, navsFooter } from "../assets/dummy";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

interface DropdownMenuProps {
    children: React.ReactNode[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="outline-none">
                {children[0]}
            </button>
            {isOpen && <div className="absolute top-full left-0">{children[1]}</div>}
        </div>
    );
};

interface AvatarProps {
    src: string;
    alt: string;
    fallback: React.ReactNode;
    delayMs: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback, delayMs }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {fallback}
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={`w-12 h-12 flex items-center gap-x-4 cursor-pointer rounded-full ring-offset-2 ring-gray-800 focus:ring-2 duration-150 ${isLoading && "hidden"}`}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
};

const Sidebar: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { user, logout } = useAuth();

    return (
        <>
            <nav className={`fixed top-0 left-0 ${isExpanded ? 'w-full h-full border-r bg-white space-y-8 sm:w-80' : 'w-20 h-full border-r bg-white space-y-8'}`}
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}>
                <div className="flex flex-col h-full">
                    <div className={`h-20 flex items-center ${isExpanded ? 'px-8' : 'justify-center px-8'}`}>
                        <Link to="/admin/overview" className="flex-none">
                            <img
                                src={isExpanded ? require("../assets/logo.png") : require("../assets/car.png")}
                                height={isExpanded ? 140 : 35}
                                width={isExpanded ? 140 : 35}
                                className="mx-auto"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col h-full">
                        <ul className="px-4 text-sm font-medium flex-1">
                            {navigation.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href={item.href}
                                        className={`flex items-center gap-x-2 text-gray-600 p-2 rounded-lg ${isExpanded ? 'hover:bg-gray-50 active:bg-gray-100 duration-150' : ''}`}
                                    >
                                        <div className="text-green-500">{item.icon}</div>
                                        {isExpanded && item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <ul className="px-4 pb-4 text-sm font-medium">
                                {navsFooter.map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={item.href}
                                            className={`flex items-center gap-x-2 text-gray-600 p-2 rounded-lg ${isExpanded ? 'hover:bg-gray-50 active:bg-gray-100 duration-150' : ''}`}
                                        >
                                            <div className="text-gray-500">{item.icon}</div>
                                            {isExpanded && item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="relative py-4 px-4 border-t">
                                <DropdownMenu>
                                    <Avatar
                                        src="https://randomuser.me/api/portraits/women/79.jpg"
                                        alt="vienna"
                                        fallback={<div>VI</div>}
                                        delayMs={600}
                                    />
                                    <div className="absolute bottom-0 left-0 w-64 rounded-lg bg-white shadow-md border text-sm text-gray-600 p-2">
                                        <span className="block text-gray-500/80 p-2">
                                            vienna@gmail.com
                                        </span>
                                        <a
                                            href="/"
                                            className={`block w-full p-2 text-left rounded-md ${isExpanded ? 'hover:bg-gray-50 active:bg-gray-100 duration-150' : ''}`}
                                        >
                                            Dashboard
                                        </a>
                                        <div className="relative rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="w-4 h-4 absolute right-1 inset-y-0 my-auto pointer-events-none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5a.75.75 0 01.04-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <select className="w-full cursor-pointer appearance-none bg-transparent p-2 outline-none">
                                                <option disabled selected>
                                                    Theme
                                                </option>
                                                <option>Dark</option>
                                                <option>Light</option>
                                            </select>
                                        </div>
                                        <button onClick={logout} className={`block w-full p-2 text-left rounded-md ${isExpanded ? 'hover:bg-gray-50 active:bg-gray-100 duration-150' : ''}`}>
                                            Logout
                                        </button>
                                    </div>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <button
                onClick={toggleSidebar}
                className="fixed top-4 right-4 w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full focus:outline-none"
            >
                {isExpanded ? "-" : "+"}
            </button> */}
        </>
    );
};

export default Sidebar;
