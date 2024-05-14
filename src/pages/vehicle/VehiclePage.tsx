import React, { useState } from 'react';
import { FiActivity } from 'react-icons/fi';
import { TiBatteryCharge } from 'react-icons/ti';
import { IoCarSport } from 'react-icons/io5';
import { posts } from '../../assets/dummy';
import AddVehicleModal from "../users/AddUserModel";
import ViewVehModel from './ViewVehModel';

// Vehicle page component
const VehiclePage: React.FC = () => {
    const [selectedVehicleId, setSelectedVehicleId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddVehicleClick = () => {
        setIsModalOpen(true);
    };

    const handleViewVehModal = (id: any) => {
        setSelectedVehicleId(id);
        setIsModalOpen(true);
        console.log()
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Vehicle Registered</h3>
                    <p className="text-gray-600 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="mt-3 md:mt-0">

                    <button
                        onClick={handleAddVehicleClick}
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Add Vehicle
                    </button>
                    <AddVehicleModal isOpen={isModalOpen} onClose={handleCloseModal} />

                </div>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((item, key) => (
                    <article
                        key={key}
                        className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
                    >
                        <div onClick={() => handleViewVehModal(item.id)}>
                            <img
                                src={item.img}
                                loading="lazy"
                                alt={item.title}
                                className="w-full h-48 rounded-t-md"
                            />
                            <div className="flex items-center -mt-48 pt-3 ml-4 mr-2">
                                <div className="flex-none w-10 h-10 rounded-full">
                                    <img
                                        src={item.authorLogo}
                                        className="w-full h-full rounded-full object-cover"
                                        alt={item.authorName}
                                    />
                                </div>
                                <div className="ml-3"></div>
                            </div>
                            <div className="flex justify-between items-center pt-3 ml-4 mr-2 mb-3 mt-36 px-12">
                                <button className="flex items-center space-x-2 bg-green-800 px-2 rounded-lg shadow-lg mr-8">
                                    <IoCarSport color="orange" />
                                    <h3 className="text-sm text-gray-200 space-x-2">
                                        {item.title} {item.model}
                                    </h3>
                                </button>
                                <div className="flex items-center space-x-1">
                                    <TiBatteryCharge size={22} color="green" />
                                    <p className="text-gray-400 text-sm mt-1">
                                        {item.desc} Refill
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ViewVehModel
                            id={selectedVehicleId}
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                        />
                    </article>
                ))}
            </div>
        </section>
    );
};

export default VehiclePage;
