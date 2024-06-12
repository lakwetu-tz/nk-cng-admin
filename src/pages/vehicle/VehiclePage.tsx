import React, { useState } from 'react';
import { FiActivity, FiCheck, FiCheckCircle } from 'react-icons/fi';
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
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((item, key) => (
                    <article
                        key={key}
                        className="max-w-full mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
                    >
                        <div className='flex flex-col' onClick={() => handleViewVehModal(item.id)}>

                            <div className="w-full h-52 duration-300 rounded-t-md bg-gray-400" >
                                {item.img ? (
                                    <img
                                        src={item.img}
                                        loading="lazy"
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-t-md"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-gray-600">
                                        <span>No Image</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center -mt-10 pt-3 ml-4 mr-2">
                                <div className="flex-none w-10 h-10 rounded-full">
                                    <img
                                        src={item.authorLogo}
                                        className="w-full h-full rounded-full object-cover"
                                        alt={item.authorName}
                                    />
                                </div>
                                <div className="ml-3"></div>
                            </div>
                            <div className="flex justify-between items-center mb-2 mt-10 px-2">
                                <div className="flex flex-col ">

                                    <p className="flex items-center space-x-2 px-2 text-sm text-gray-400 ">
                                        <IoCarSport color="orange" className='mr-2' />
                                        {item.title} {item.model}
                                    </p>
                                    <p className="flex items-center space-x-2 px-2 mt-2 text-sm text-gray-400 ">
                                        <FiCheckCircle color="green" className='mr-2' />
                                        Cleared
                                    </p>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <TiBatteryCharge size={22} color="green" />
                                    <p className="text-gray-400 text-sm mt-1">
                                        1 CNG Tank
                                        <strong className='ml-2'>
                                            17 KG
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </article>

                ))}
            </div>

            <ViewVehModel
                id={selectedVehicleId}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default VehiclePage;
