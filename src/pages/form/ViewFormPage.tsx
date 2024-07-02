// src/pages/ViewLoanPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getFormById } from '../../api/FormAPi';

interface Loan {
  id: string;
  loanType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // Add other loan details as needed
}

const ViewLoanPage = () => {
  const { formId } = useParams<{ formId: string }>();
  const { data: loan, isLoading, isError, error } = useQuery(['loan', formId], () => getFormById(formId));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <h1 className="text-2xl font-bold mb-4">Loan Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg font-semibold">Loan ID: {loan.id}</p>
        <p className="mt-2">Loan Type: {loan.loanType}</p>
        <p className="mt-2">Borrower Name: {loan.firstName} {loan.lastName}</p>
        <p className="mt-2">Email: {loan.email}</p>
        <p className="mt-2">Phone: {loan.phone}</p>
        <p className="mt-2">National ID: {loan.nationalId}</p>
        <p className="mt-2">Location: {loan.address.ward}, {loan.address.city}</p>
        <p className="mt-2">Request Date: {loan.createdAt}</p>
        <p className="mt-2">Status: {loan.status}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ViewLoanPage;
