import React from 'react';
import { FiBatteryCharging, FiCheckCircle, FiMapPin, FiUserCheck } from 'react-icons/fi';

interface CardProps {
    title: string;
    status: string;
    refills: number;
    location: string;
    user: string;
}

const Card: React.FC<CardProps> = ({ title, status, location, refills, user }) => {
    return (
        <div className="border-2 rounded-md px-4 py-2 mb-2">
            <div className="mb-4 flex items-center justify-between">
                <div className="mb-4 flex items-center gap-x-2">
                    <p className='font-extrabold text-gray-300'>Plate: </p>
                    <h2 className="text-base text-gray-700 font-bold">{title}</h2>
                </div>
                <p className="font-bold flex text-xs items-center text-orange-500 gap-x-[2px]">
                    <FiUserCheck className='w-4 h-4' />
                    {user}
                </p>
                
            </div>
            <div className="flex justify-between mb-2">
                <p className={`font-base flex text-xs items-center gap-x-[2px] ${status === 'Online' ? 'text-green-600' : 'text-red-600'}`}>
                    <FiCheckCircle className='w-4 h-4' />
                    {status}
                </p>
                <p className='flex items-center gap-x-[2px] text-xs font-bold'>
                    <FiBatteryCharging className='text-green-700 w-4 h-4' />
                    {refills}kg CNG</p>
                <p className="font-bold flex text-xs items-center gap-x-[2px]">
                    <FiMapPin className='w-4 h-4' />
                    {location}
                </p>
               
            </div>
        </div>
    );
};

export default Card;
