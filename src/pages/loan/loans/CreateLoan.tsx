import React, { useState } from 'react';

const CreateLoanForm: React.FC = () => {
  const [loanData, setLoanData] = useState({
    name: '',
    description: '',
    image: '',
    loan_type: '',
    total_loan_amount: 0,
    down_payment: false,
    weekly_payment: 0,
    allowed_engine_cc: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value, type, } = e.target;
    setLoanData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? '' : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loanData); // Submit logic goes here
  };

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-full flex items-center justify-between ">
          <div>
            <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl"> Create Loan</h1>
            <p className="text-gray-600 mt-2">
              {/* write a little description about this loans */}
            </p>
          </div>

        </div>

        <form onSubmit={handleSubmit} className="mt-16 bg-white shadow-md border-[1px] rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Loan Name"
              name="name"
              value={loanData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Loan Description"
              name="description"
              value={loanData.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              name="image"
              onChange={handleChange}
              value={loanData.image}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loan_type">
              Loan Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="loan_type"
              name="loan_type"
              value={loanData.loan_type}
              onChange={handleChange}
              required
            ><option value="">Select Loan Type</option>
              <option value="car">NK </option>
              <option value="house">House</option>
              <option value="business">Business</option>
              <option value="personal">Personal</option>
              <option value="education">Education</option>
            </select>

          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="total_loan_amount">
              Total Loan Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="total_loan_amount"
              type="number"
              placeholder="Total Loan Amount"
              name="total_loan_amount"
              value={loanData.total_loan_amount}
              onChange={handleChange}
              required
            />

          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interest_rate">

            </label>
          </div>

          <div className='mb-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interest_rate">
              Interest Rate
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="interest_rate"
            type="number"
            placeholder="Interest Rate"
            name="interest_rate"
            // value={loanData.interest_rate}
            onChange={handleChange}
            required
            />
      
          </div>

          <div className='mb-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loan_term">
              Loan Term
            </label>
            
          </div>


          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Loan
            </button>
          </div>
        </form>

        {/* form Summary here */}
        <aside>
          
        </aside>
      </div>
    </section>
  );
};

export default CreateLoanForm;
