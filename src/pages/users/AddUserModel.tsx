import axios from 'axios';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    nationalId: string;
    address: string;
    city: string;
    state: string;
    zip: string;
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const AddUserModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const [isStep, setIsStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        nationalId: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://127.0.0.1:400/api/v1/form/personal', {
              formData
            });

            if (response.data.status === 'Ok') {
                // Handle success
                console.log('Form submitted successfully');
                onClose();
            } else {
                // Handle server errors
                console.error('Server error:', response.statusText);
            }
        } catch (error) {
            // Handle network errors
            console.error('Network error:', error);
        }
    };

    return (
        <div className={`fixed inset-0 z-10 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="relative bg-white rounded-lg px-4 py-6 w-full max-w-2xl">
                    <div className="flex justify-end">
                        <button onClick={onClose} className="p-2 text-gray-400 rounded-md hover:bg-gray-100">
                            <IoClose className="w-5 h-5" />
                        </button>
                    </div>
                    <section className="p-6 bg-gray-100">
                        <section className="container flex flex-col mx-auto space-y-12">
                            {isStep === 1 && (
                                <form className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50" onSubmit={(e) => { e.preventDefault(); setIsStep(2); }}>
                                    <div className="space-y-2 col-span-full lg:col-span-1">
                                        <p className="font-medium">Personal Information</p>
                                        <p className="text-xs">Fill in the user information and click next for more information</p>
                                    </div>
                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                        {['firstName', 'lastName', 'email', 'phone', 'nationalId', 'address', 'city', 'state', 'zip'].map((field, index) => (
                                            <div key={index} className="col-span-full sm:col-span-3">
                                                <label htmlFor={field} className="text-sm">{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
                                                <input 
                                                    id={field} 
                                                    name={field} 
                                                    type="text" 
                                                    value={(formData as any)[field]} 
                                                    onChange={handleChange} 
                                                    placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} 
                                                    className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 text-gray-50 border-gray-300" />
                                            </div>
                                        ))}
                                        <div className="col-span-full">
                                            <label htmlFor="image" className="text-sm">Photo</label>
                                            <input 
                                                id="image" 
                                                name="image" 
                                                type="file" 
                                                accept="image/*" 
                                                onChange={handleImageChange} 
                                                className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 text-gray-50 border-gray-300" />
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-end w-full">
                                        <button type="button" onClick={() => setIsStep(2)} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Next</button>
                                    </div>
                                </form>
                            )}
                            {isStep === 2 && (
                                <form className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50" onSubmit={handleSubmit}>
                                    <div className="space-y-2 col-span-full lg:col-span-1">
                                        <p className="font-medium">Sponsor Information</p>
                                        <p className="text-xs">Adipisci fuga autem eum!</p>
                                    </div>
                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                        {['sponsorFirstName', 'sponsorLastName', 'sponsorPhone', 'sponsorEmail', 'sponsorNationalId', 'sponsorCity'].map((field, index) => (
                                            <div key={index} className="col-span-full sm:col-span-3">
                                                <label htmlFor={field} className="text-sm">{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
                                                <input id={field} name={field} type="text" value={(formData as any)[field]} onChange={handleChange} placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 text-gray-50 border-gray-300" />
                                            </div>
                                        ))}
                                        <div className="col-span-full">
                                            <label htmlFor="sponsorImage" className="text-sm">Photo</label>
                                            <input id="sponsorImage" name="sponsorImage" type="file" accept="image/*" onChange={handleImageChange} className="w-full rounded-md px-4 py-2 border-2 focus:ring focus:ring-opacity-75 text-gray-50 border-gray-300" />
                                        </div>
                                    </div>
                                    <div className="mt-6 flex gap-x-12 justify-between w-full">
                                        <button type="button" onClick={() => setIsStep(1)} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Previous</button>
                                        <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Submit</button>
                                    </div>
                                </form>
                            )}
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AddUserModal;
