import React from 'react';
import { Link } from 'react-router-dom';
import { integrations, transactions } from '../../assets/dummy';
import { FiSearch } from 'react-icons/fi';

const PayPage: React.FC = () => {

    const [isActiveTab, setIsActiveTab] = React.useState("overview")
    const navigation = [
        {
            tab: "overview",
            name: "Overview"
        },
        {
            tab: "integration",
            name: "Integration"
        },
        {
            tab: "transactions",
            name: "Approval"
        },
        {
            tab: "settings",
            name: "settings"
        },
    ]



    return (

        <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div>
                    <h3 className="text-gray-800 text-2xl font-bold">
                        Payments
                    </h3>
                </div>
                <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
                    <label htmlFor=""
                        className="flex items-center justify-center gap-x-2 pl-4 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 md:text-sm"
                    >

                        <FiSearch className="w-5 h-5 text-gray-500" />
                        Filter
                        <input
                            type="search"
                            className='px-4 py-2 border border-gray-200 rounded-md hover:border-gray-300 ring:border-gray-300 focus:border-green-200'
                        />
                    </label>
                    <a
                        href="javascript:void(0)"
                        className="block px-4 py-2 mt-3 text-center text-white duration-150 font-medium bg-green-600 rounded-lg hover:bg-green-500 active:bg-green-700 sm:mt-0 md:text-sm"
                    >
                        Create payment
                    </a>
                </div>
            </div>
            <div className="mt-6 md:mt-4">
                <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                    {
                        navigation.map((item, idx) => (
                            // Replace [idx == 0] with [window.location.pathname == item.path] or create your own logic
                            <li key={idx} className={`py-2 border-b-2 ${isActiveTab === item.tab ? "border-green-600 text-green-600" : "border-white text-gray-500"}`}>
                                <a
                                    onClick={() => setIsActiveTab(item.tab)}
                                    className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-green-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>


            {isActiveTab === "overview" && (
                <section className="py-16">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl mb-12">

                            {/* <!-- Tile 1 --> */}
                            <div className="flex items-center p-4 bg-white rounded">
                                <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                                    <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex-grow flex flex-col ml-4">
                                    <span className="text-xl font-bold">TZS 8,430</span>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500">Revenue last 30 days</span>
                                        <span className="text-green-500 text-sm font-semibold ml-2">+12.6%</span>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Tile 2 --> */}
                            <div className="flex items-center p-4 bg-white rounded">
                                <div className="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
                                    <svg className="w-6 h-6 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex-grow flex flex-col ml-4">
                                    <span className="text-xl font-bold">211</span>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500">Loans last 30 days</span>
                                        <span className="text-red-500 text-sm font-semibold ml-2">-8.1%</span>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Tile 3 --> */}
                            <div className="flex items-center p-4 bg-white rounded">
                                <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                                    <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex-grow flex flex-col ml-4">
                                    <span className="text-xl font-bold">140</span>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Customers last 30 days</span>
                                            <span className="text-green-500 text-sm font-semibold ml-2">+28.4%</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- Component End  --> */}
                        </div>

                        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                            <h2 className="mb-4 text-2xl font-semibold leading-tight">Summary Loans</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-xs">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col className="w-24" />
                                    </colgroup>
                                    <thead className="dark:bg-gray-300">
                                        <tr className="text-left">
                                            <th className="p-3">Loan No. #</th>
                                            <th className="p-3">Client</th>
                                            <th className="p-3">Issued</th>
                                            <th className="p-3">Due</th>
                                            <th className="p-3 text-right">Amount</th>
                                            <th className="p-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                            <td className="p-3">
                                                <p>97412378923</p>
                                            </td>
                                            <td className="p-3">
                                                <p>Dastun Corporation</p>
                                            </td>
                                            <td className="p-3">
                                                <p>14 Jan 2022</p>
                                                <p className="dark:text-gray-600">Friday</p>
                                            </td>
                                            <td className="p-3">
                                                <p>01 Feb 2022</p>
                                                <p className="dark:text-gray-600">Tuesday</p>
                                            </td>
                                            <td className="p-3 text-right">
                                                <p>TZS 15,792</p>
                                            </td>
                                            <td className="p-3 text-right">
                                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                    <span>Pending</span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                            <td className="p-3">
                                                <p>97412378923</p>
                                            </td>
                                            <td className="p-3">
                                                <p>Micheal Inc.</p>
                                            </td>
                                            <td className="p-3">
                                                <p>14 Jan 2022</p>
                                                <p className="dark:text-gray-600">Friday</p>
                                            </td>
                                            <td className="p-3">
                                                <p>01 Feb 2022</p>
                                                <p className="dark:text-gray-600">Tuesday</p>
                                            </td>
                                            <td className="p-3 text-right">
                                                <p>TZS 275</p>
                                            </td>
                                            <td className="p-3 text-right">
                                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                    <span>Pending</span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                            <td className="p-3">
                                                <p>97412378923</p>
                                            </td>
                                            <td className="p-3">
                                                <p>Vincent co.</p>
                                            </td>
                                            <td className="p-3">
                                                <p>14 Jan 2022</p>
                                                <p className="dark:text-gray-600">Friday</p>
                                            </td>
                                            <td className="p-3">
                                                <p>01 Feb 2022</p>
                                                <p className="dark:text-gray-600">Tuesday</p>
                                            </td>
                                            <td className="p-3 text-right">
                                                <p>TZS 8,950,500</p>
                                            </td>
                                            <td className="p-3 text-right">
                                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                    <span>Pending</span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                            <td className="p-3">
                                                <p>97412378923</p>
                                            </td>
                                            <td className="p-3">
                                                <p>Enock Corporation</p>
                                            </td>
                                            <td className="p-3">
                                                <p>14 Jan 2022</p>
                                                <p className="dark:text-gray-600">Friday</p>
                                            </td>
                                            <td className="p-3">
                                                <p>01 Feb 2022</p>
                                                <p className="dark:text-gray-600">Tuesday</p>
                                            </td>
                                            <td className="p-3 text-right">
                                                <p>TZS 98,218</p>
                                            </td>
                                            <td className="p-3 text-right">
                                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                    <span>Pending</span>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            )}


            {isActiveTab === "integration" && (
                <section className="py-16">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="max-w-md">
                            <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl"> Payment Integrations</h1>
                            <p className="text-gray-600 mt-2">Seamlessly integrate your application with popular payment services.</p>
                        </div>
                        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                integrations.map((item, idx) => (
                                    <li className="border rounded-lg">
                                        <div className="flex items-start justify-between p-4">
                                            <div className="space-y-2">
                                                {/* <img src={item.icon} alt='payment' className='w-18 h-12'/> */}
                                                <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                                                <p className="text-gray-600 text-sm">{item.desc}</p>
                                            </div>
                                            <button className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">Integrate</button>
                                        </div>
                                        <div className="py-5 px-4 border-t text-right">
                                            <a href="javascript:void(0)" className="text-green-600 hover:text-green-500 text-sm font-medium">
                                                View docs
                                            </a>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
            )}


            {isActiveTab === "settings" && (
                <section className="py-16">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="max-w-md">
                            <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">Settings</h1>
                            <p className="text-gray-600 mt-2">Configure your loan management system.</p>
                        </div>
                        <div className="mt-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="border rounded-lg p-6">
                                    <h3 className="text-gray-800 font-semibold mb-4">General Settings</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-gray-600 block mb-2">Default Interest Rate</label>
                                            <input
                                                type="number"
                                                className="w-full border rounded-lg px-3 py-2 text-gray-800"
                                                placeholder="Enter interest rate"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-600 block mb-2">Default Loan Duration</label>
                                            <input
                                                type="number"
                                                className="w-full border rounded-lg px-3 py-2 text-gray-800"
                                                placeholder="Enter loan duration (months)"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="border rounded-lg p-6">
                                    <h3 className="text-gray-800 font-semibold mb-4">Notifications</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 text-green-600"
                                            />
                                            <label className="text-gray-600 ml-2">Send email notifications</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 text-green-600"
                                            />
                                            <label className="text-gray-600 ml-2">Send SMS notifications</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}



            {isActiveTab === "transactions" && (
                <section className="py-16">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="max-w-md">
                            <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">Loan Approval</h1>
                            <p className="text-gray-600 mt-2">Approve requested loans with ease.</p>
                        </div>
                        <div className="mt-8 overflow-x-auto">
                            <table className="min-w-full text-xs">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col className="w-24" />
                                </colgroup>
                                <thead className="dark:bg-gray-300">
                                    <tr className="text-left">
                                        <th className="p-3">Loan ID</th>
                                        <th className="p-3">User</th>
                                        <th className="p-3">Type</th>
                                        <th className="p-3">Date</th>
                                        <th className="p-3 text-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                                        >
                                            <td className="p-3">{transaction.id}</td>
                                            <td className="p-3">{transaction.user}</td>
                                            <td className="p-3">
                                                <span
                                                    className={`px-3 py-1 font-semibold rounded-md ${transaction.type === "Loan Issued"
                                                        ? "bg-green-100 text-green-800"
                                                        : transaction.type === "Loan Returned"
                                                            ? "bg-blue-100 text-blue-800"
                                                            : "bg-red-100 text-red-800"
                                                        }`}
                                                >
                                                    {transaction.type}
                                                </span>
                                            </td>
                                            <td className="p-3">{transaction.date}</td>
                                            <td className="p-3 text-right">TZS {transaction.amount.toLocaleString()}</td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}


        </div>
    );
};

export default PayPage;