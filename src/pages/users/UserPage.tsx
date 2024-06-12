import React, { useEffect, useState, useMemo } from 'react';
import AddUserModal from './AddUserModel';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

interface Form {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: Address
    validated: boolean;
    created_at: string;
}

interface Address {
    ward: string,
    city: string,
    postalCode: string
}

const UserPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [forms, setForms] = useState<Form[]>([]);
    const [selectedForms, setSelectedForms] = useState<Set<string>>(new Set());
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<Form[]>('http://127.0.0.1:4000/api/v1/form/getAll');
                setForms(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleOpen = (userId: string) => {
        alert(`Open user with ID: ${userId}`);
    };

    const handleDelete = async (formId: string) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete user with ID: ${formId}?`);
        if (confirmDelete) {
            try {
                await axios.delete(`http://127.0.0.1:4000/api/v1/form/delete/${formId}`);
                setForms(forms.filter(form => form._id !== formId));
                alert(`User with ID: ${formId} deleted successfully`);
            } catch (error) {
                console.error('Error deleting user:', error);
                alert(error);
            }
        }
    };

    const handleDeleteSelected = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete selected users?');
        if (confirmDelete) {
            try {
                const formIds = Array.from(selectedForms);
                await axios.post('http://127.0.0.1:4000/api/v1/form/delete-multiple', { formIds });
                setForms(forms.filter(form => !selectedForms.has(form._id)));
                setSelectedForms(new Set());
                alert('Selected users deleted successfully');
            } catch (error) {
                console.error('Error deleting users:', error);
                alert(error);
            }
        }
    };

    const handleSelect = (formId: string) => {
        setSelectedForms(prev => {
            const newSelectedForms = new Set(prev);
            if (newSelectedForms.has(formId)) {
                newSelectedForms.delete(formId);
            } else {
                newSelectedForms.add(formId);
            }
            return newSelectedForms;
        });
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(0);
    };

    const filteredForms = useMemo(() => {
        return forms.filter(form =>
            `${form.first_name} ${form.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
            form.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            form.phone.includes(searchQuery) ||
            form.address.ward.toLowerCase().includes(searchQuery.toLowerCase()) ||
            form.address.city.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [forms, searchQuery]);

    const paginatedForms = useMemo(() => {
        const start = currentPage * pageSize;
        return filteredForms.slice(start, start + pageSize);
    }, [filteredForms, currentPage, pageSize]);

    const pageCount = Math.ceil(filteredForms.length / pageSize);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Loan members
                    </h3>
                    <p className="text-gray-600 mt-2">
                        View all loan members in a table format. You can also add new members.
                    </p>
                </div>
                <div className="mt-3 md:mt-0 flex gap-2">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-green-600 rounded-lg hover:bg-green-500 active:bg-green-700 md:text-sm"
                    >
                        Add member
                    </button>
                    {selectedForms.size > 0 && (
                        <button
                            onClick={handleDeleteSelected}
                            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700 md:text-sm"
                            disabled={selectedForms.size === 0}
                        >
                            Delete selected
                        </button>
                    )
                     }
                    
                    <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </div>
            </div>
            <div className="mt-6">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">
                                <input
                                    type="checkbox"
                                    onChange={e => setSelectedForms(e.target.checked ? new Set(forms.map(form => form._id)) : new Set())}
                                    checked={selectedForms.size === forms.length && forms.length > 0}
                                />
                            </th>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Phone</th>
                            <th className="py-3 px-6">Ward</th>
                            <th className="py-3 px-6">City</th>
                            <th className='py-3 px-6'>Date</th> 
                            <th className='py-3 px-6'>Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {paginatedForms.map((form) => (
                            <tr key={form._id}>
                                <td className="py-3 px-6">
                                    <input
                                        type="checkbox"
                                        onChange={() => handleSelect(form._id)}
                                        checked={selectedForms.has(form._id)}
                                    />
                                </td>
                                <td className="py-3 px-6">
                                    <div>
                                        <span className="block text-gray-700 text-sm font-medium">{form.first_name} {form.last_name}</span>
                                        <span className="block text-gray-700 text-xs">{form.email}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6">{form.email}</td>
                                <td className="py-3 px-6">{form.phone}</td>
                                <td className="py-3 px-6">{form.address.ward}</td>
                                <td className="py-3 px-6">{form.address.city}</td>
                                <td className='py-3 px-6'>{form.created_at}</td>
                                <td className={`px-3 py-[1px] rounded-full font-semibold text-xs ${form.validated == true ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
                                    {form.validated ? "": "Not Approved"}</td>
                                <td className="py-3 px-6 text-right">
                                    <button
                                        onClick={() => handleOpen(form._id)}
                                        className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg"
                                    >
                                        manage
                                    </button>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <div className="mt-4 flex justify-between">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={({ selected }) => setCurrentPage(selected)}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    previousClassName={'py-2 px-4 bg-gray-300 rounded-lg'}
                    nextClassName={'py-2 px-4 bg-gray-300 rounded-lg'}
                    pageClassName={'py-2 px-4'}
                    activeLinkClassName={'font-bold'}
                />
                <div>
                    <span>Show </span>
                    <select
                        value={pageSize}
                        onChange={e => setPageSize(Number(e.target.value))}
                        className="p-2 border border-gray-300 rounded"
                    >
                        {[10, 20, 30, 40, 50].map(size => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    <span> entries</span>
                </div>
            </div> */}
        </div>
    );
};

export default UserPage;
