import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchForms, addForms } from '../../api/FormAPi';
import { format } from 'date-fns';
import { Table } from '../../components/Table';

const FormPage = () => {
    const queryClient = useQueryClient();
    const { data: forms, isLoading, isError, error } = useQuery('forms', fetchForms);

    const mutation = useMutation(addForms, {
        onSuccess: () => {
            queryClient.invalidateQueries('forms');
        },
    });

    const handleAddForms = async (newFormData: any) => {
        try {
            await mutation.mutateAsync(newFormData);
        } catch (err) {
            console.error('Error adding forms:', err);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {(error as Error).message}</p>;

    const columns = [
        { key: 'loanType', header: 'Loan Type' },
        { key: 'first_name', header: 'First Name' },
        { key: 'last_name', header: 'Last Name' },
        { key: 'email', header: 'Email' },
        { key: 'phone', header: 'Phone' },
        { key: 'nationalId', header: 'National ID' },
        { key: 'address', header: 'Location' },
        { key: 'created_at', header: 'Request Date' }
    ];

    const formattedForms = forms?.map((form: any) => ({
        ...form,
        created_at: format(new Date(form.created_at), 'dd/MM/yyyy'),
        address: `${form.address.ward}, ${form.address.city}`
    })) || [];

    return (
        <section className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">All Forms</h3>
                    <p className="text-gray-600 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="mt-3 md:mt-0">
                    <button
                        onClick={() => handleAddForms({ /* form data */ })}
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Add Form
                    </button>
                </div>
            </div>
            <Table columns={columns} data={formattedForms} />
        </section>
    );
};

export default FormPage;
