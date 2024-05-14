import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { posts } from "../../assets/dummy";
import { FiCopy, FiCreditCard, FiMap, FiSearch } from "react-icons/fi";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    id: number | null
};

const ViewVehModel: React.FC<Props> = ({ id, isOpen, onClose }) => {

    const monthlyData = [
        { month: 'Jan', height: 24, color: 'rgb(123, 255, 253)' },
        { month: 'Feb', height: 66, color: 'rgb(0, 255, 244)' },
        { month: 'Mar', height: 42, color: 'rgb(0, 237, 219)' },
        { month: 'Apr', height: 20, color: 'rgb(0, 255, 244)' },
        { month: 'May', height: 38, color: 'rgb(123, 255, 253)' },
        { month: 'Jun', height: 70, color: 'rgb(0, 255, 244)' },
        { month: 'Jul', height: 88, color: 'rgb(0, 237, 219)' },
        { month: 'Aug', height: 42, color: 'rgb(123, 255, 253)' },
        { month: 'Sep', height: 84, color: 'rgb(0, 255, 244)' },
        { month: 'Oct', height: 70, color: 'rgb(0, 237, 219)' },
        { month: 'Nov', height: 26, color: 'rgb(123, 255, 253)' },
        { month: 'Dec', height: 52, color: 'rgb(0, 255, 244)' },
    ];

    const maxHeight = Math.max(...monthlyData.map(({ height }) => height));


    const car = posts.find(post => post.id === id);
    console.log(car);
    return (
        <div className={`fixed inset-0 z-10 overflow-y-auto ${isOpen ? "block" : "hidden"
            }`}
        >
            <div className="flex items-center justify-center min-h-screen  ">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="relative bg-white rounded-lg px-4 py-6 w-full max-h-screen overflow-y-auto">
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                        >
                            <IoClose className="w-5 h-5" />
                        </button>
                    </div>
                    <section className="py-16">
                        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                                <div className="items-start justify-between py-4 border-b md:flex">
                                    <div>
                                        <h3 className="text-gray-800 text-2xl font-bold">
                                            {car?.title} {car?.model}
                                        </h3>
                                    </div>
                                    <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
                                        <a
                                            href="javascript:void(0)"
                                            className="block px-4 py-2 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                                        >
                                            Browse reports
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="block px-4 py-2 mt-3 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 sm:mt-0 md:text-sm"
                                        >
                                            Engagement
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8 mt-8 mb-8">
                                <div className="items-start justify-between gap-x-4 py-4 sm:flex">
                                    <div className="max-w-lg">
                                        <h3 className="text-gray-800 text-2xl font-bold">
                                            Details
                                        </h3>
                                        <p className="text-gray-400 mt-2">
                                            Lorem Ipsum text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                    <div className="mt-6 sm:mt-0">
                                        <div className="relative">

                                            <FiSearch className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" />
                                            <input
                                                type="text"
                                                placeholder="Enter your email"
                                                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 rounded-lg sm:max-w-xs"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div className="border-[1px] border-gray-200 rounded-lg bg-gray-100 ">
                                        <div className="flex justify-between ">
                                            <div className="flex item-center mb-2">
                                                <img src={car?.img} alt="Vehicle Image" className="px-4 py-4 w-96 h-full object-cover" />
                                                <div className="flex flex-col mt-4 gap-y-4 pl-4 font-mono">
                                                    <div className="gap-y-2">
                                                        <p className="text-gray-400 font-semibold">Owner</p>
                                                        <p className="font-bold text-gray-600 text-lg">John Kamau</p>
                                                    </div>

                                                    <div className="gap-y-2">
                                                        <p className="text-gray-400 font-semibold">Debt</p>
                                                        <p className="font-bold text-gray-600 text-lg">TZS 90,000</p>
                                                    </div>

                                                    <div className="flex items-center gap-x-8">
                                                        <div className="gap-y-2">
                                                            <p className="text-gray-400 font-semibold mb-1">Status</p>
                                                            <div className="flex gap-x-2 items-center">
                                                                <div className="rounded-full bg-green-600 w-4 h-4"></div>
                                                                <p className="text-sm">Pending...</p>
                                                            </div>
                                                        </div>
                                                        <div className="gap-y-2">
                                                            <p className="text-gray-400 font-semibold mb-1">Created</p>
                                                            <p className="text-sm">4/10/2022 by Admin</p>
                                                        </div>
                                                    </div>
                                                    <div className="gap-y-2">
                                                        <div className="mb-2">
                                                            <p className="text-gray-400 font-semibold mb-1">Description</p>
                                                            <div className="bg-gray-200 py-1 rounded-md flex items-center justify-between gap-x-4 text-sm">
                                                                <span>33102932130293102</span>
                                                                <FiCopy />
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-x-2">
                                                            <FiMap size={15} className="text-gray-400" />
                                                            <p className="mt-1 text-sm text-gray-400 font-semibold mb-1">Location:</p>
                                                            <p className="text-sm font-semibold text-gray-600">Morrocco, Kinondoni</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="mt-4 px-4 ">
                                                <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100" src="https://source.unsplash.com/40x40/?portrait?1" />

                                            </div>

                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div className="border-2 p-4 rounded-lg mt-24">
                                <h3 className="font-bold text-lg ">Manual Payment</h3>
                                <p className="text-sm text-gray-400 mb-4">Received cash form the client and clear here</p>
                                <form className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between sm:gap-x-4">
                                    <div className="flex items-center gap-x-2 px-4 ">
                                        <label htmlFor="amount" className="text-sm text-gray-400 font-semibold">Amount</label>
                                        <input type="number" id="amount" placeholder="TZS 0" className="text-sm text-gray-600 font-semibold border-collapse border-2 border-gray-300 rounded-md py-[2px] px-2" />
                                    </div>
                                    <div className="flex items-center gap-x-2 px-4 ">
                                        <label htmlFor="amount" className="text-sm text-gray-400 font-semibold">Date</label>
                                        <input type="date" id="amount" placeholder="TZS 0" className="text-sm text-gray-600 font-semibold border-collapse border-2 border-gray-300 rounded-md py-[2px] px-2" />    
                                    </div>
                                   
                                    </form>
                                    <button className="px-6 bg-blue-500 text-white font-semibold py-2 rounded-md mt-4">Submit</button>

                            </div>
                            


                            <div className="border-[1px] border-gray-100 mt-24 "></div>



                            <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8 mt-8">
                                <div className="items-start justify-between gap-x-4 py-4 sm:flex mb-4">
                                    <div className="max-w-lg">
                                        <h3 className="text-gray-800 text-2xl font-bold">
                                            Summary Usage
                                        </h3>
                                        <p className="text-gray-400 mt-2">
                                            Lorem Ipsum text of the printing and typesetting industry.
                                        </p>
                                    </div>


                                </div>

                                <div className=" border-2 flex-grow bg-white rounded-xl shadow-md px-6 py-4 flex flex-col">
                                    <div
                                        className="text-xs my-4 font-semibold tracking-wide uppercase py-1 px-3 rounded-full"
                                        style={{ backgroundColor: 'rgb(123, 255, 253)', color: 'rgb(0, 119, 117)' }}
                                    >
                                        New
                                    </div>
                                    <div className="flex flex-row justify-between items-end h-64">
                                        {monthlyData.map(({ month, height, color }, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div
                                                    className="h-auto w-8 rounded-full"
                                                    style={{ backgroundColor: color, height: `${height}px` }}
                                                ></div>
                                                <div className="text-center text-xs text-gray-400 font-semibold mt-2">{month}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </section>


                </div>
            </div>
        </div>
    );
};

export default ViewVehModel;
