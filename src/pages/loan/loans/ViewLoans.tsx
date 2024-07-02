import React, { useState} from 'react'
import { FiPlus } from 'react-icons/fi'
import { integrations } from '../../../assets/dummy'
import CreateLoan from './CreateLoan';


const ViewLoans = () => {
    const [ shift, setShift ] = useState('create');
    const [ selectedLoan, setSelectedLoan ] = useState(null);
    return (
    <>
        {/* view all loans here */}
        { shift === "all" && (
            <section className="py-16">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-full flex items-center justify-between ">
                        <div>
                            <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl"> Available Loans</h1>
                            <p className="text-gray-600 mt-2">
                                {/* write a little description about this loans */}
                            </p>
                        </div>
                        <div>
                            {/* button to add nwe loan */}
                            <button type='button' className='bg-gray-100 px-2 py-1 rounded-lg text-sm flex item-center border-[1px]'>
                                <FiPlus className="text-gray-600 w-4 h-4 text-bold duration-050 mt-1" />
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                    Add New Loan</span>
                            </button>
                        </div>

                    </div>
                    <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            integrations.map((item, idx) => (
                                <li className="border rounded-lg">
                                    <div className="flex items-start justify-between p-4 space-x-12">
                                        <div className="space-y-2">
                                            <img src={item.icon} alt='payment' className='w-18 h-12 m-4' />
                                            <div className='m-4 pt-4 w-full'>
                                                <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                                                <p className="text-gray-600 text-sm">{item.desc}</p>
                                            </div>

                                        </div>
                                        <button className="text-gray-700 text-sm  m-4 border rounded-lg px-3 py-2 duration-150 hover:bg-red-100">Delete</button>
                                    </div>
                                    <div className="py-5 px-4 border-t text-right">
                                        <a href="javascript:void(0)" className="text-green-600 hover:text-green-500 text-sm font-medium">
                                            View Loan
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        )}

        {/* create loans here */}
        { shift === "create" && (
            <CreateLoan/>
        )}

        {/* view only selected loan */}
        {/* { shift === 'selected' && (

        )} */}

       
    </>
    )
}

export default ViewLoans;