import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

type FormData = {
    make: string;
    model: string;
    year: string;
    color: string;
    image: string | ArrayBuffer | null;
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const AddUserModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const [ isStep, setIsStep ] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        make: "",
        model: "",
        year: "",
        color: "",
        image: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    image: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form Data:", formData);
        // Close the modal after submission
        onClose();
    };

    return (
        <div className={`fixed inset-0 z-10 overflow-y-auto  ${isOpen ? "block" : "hidden"
            }`}
        >
            <div className="flex items-center justify-center min-h-screen ">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="relative bg-white rounded-lg px-4 py-6 w-full h-screen">
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                        >
                            <IoClose className="w-5 h-5" />
                        </button>
                    </div>
                    <section className="p-6 bg-gray-100 dark:text-gray-900">
                        <section className="container flex flex-col mx-auto space-y-12">
                            { isStep === 1 && (
                                <form className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                                    <div className="space-y-2 col-span-full lg:col-span-1">
                                        <p className="font-medium">Personal Inormation</p>
                                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                                    </div>
                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="firstname" className="text-sm">First name</label>
                                            <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 text-gray-50 focus:dark:ring-violet-600 border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="lastname" className="text-sm">Last name</label>
                                            <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75  text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="email" className="text-sm">Email</label>
                                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="telephone" className="text-sm">Phone</label>
                                            <input id="phone" type="tel" placeholder="Phone" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="telephone" className="text-sm">National Id </label>
                                            <input id="phone" type="number" placeholder="19981029-23000-00000-23" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="address" className="text-sm">Address</label>
                                            <input id="address" type="text" placeholder="" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-2">
                                            <label htmlFor="city" className="text-sm">City</label>
                                            <input id="city" type="text" placeholder="" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-2">
                                            <label htmlFor="state" className="text-sm">State / Province</label>
                                            <input id="state" type="text" placeholder="" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-2">
                                            <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                            <input id="zip" type="text" placeholder="" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full">
                                            <label htmlFor="bio" className="text-sm">Photo</label>
                                            <div className="flex items-center space-x-2">
                                                <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300" />
                                                <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-800">Change</button>
                                            </div>
                                        </div>
                                        <div className="mt-6 justify-end flex w-full">
                                    
                                            <button
                                                type="submit"
                                                onClick={() => setIsStep(isStep + 1)}
                                                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                                            >
                                                Next
                                            </button>
                                    </div>
                                    </div>
                                </form>

                                
                            )}
                          

                            {isStep === 2 && (
                                <section className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                                    <div className="space-y-2 col-span-full lg:col-span-1">
                                        <p className="font-medium">Sponsor Information</p>
                                        <p className="text-xs">Adipisci fuga autem eum!</p>
                                    </div>
                                    <form className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="username" className="text-sm">First name</label>
                                            <input id="username" type="text" placeholder="Username" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="username" className="text-sm">Second name</label>
                                            <input id="username" type="text" placeholder="Username" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="website" className="text-sm">Phone</label>
                                            <input id="website" type="text" placeholder="+255777777777" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="website" className="text-sm">Email</label>
                                            <input id="website" type="text" placeholder="+255777777777" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="website" className="text-sm">National ID</label>
                                            <input id="website" type="text" placeholder="National Id or Votter Id" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                        </div>
                                        <div className="col-span-full">
                                            <label htmlFor="city" className="text-sm">City</label>
                                            <textarea id="city" placeholder="" className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                                        </div>
                                        <div className="col-span-full">
                                            <label htmlFor="bio" className="text-sm">Photo</label>
                                            <div className="flex items-center space-x-2">
                                                <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300" />
                                                <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-800">Change</button>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex gap-x-12 justify-between">
                                            <button
                                                type="button"
                                                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 "
                                                onClick={() => setIsStep(isStep - 1)}
                                            >
                                                Previous
                                            </button>
                                            <button
                                                type="submit"
                                                onClick={() => setIsStep(isStep - 1)}
                                                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </section>
                            ) }

                            </section>
                          
           
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AddUserModal;
