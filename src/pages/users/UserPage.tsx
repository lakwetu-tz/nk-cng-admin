import React, { useState } from 'react'
import { tableItems } from '../../assets/dummy';
import AddUserModal from './AddUserModel';

const UserPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
              <div className="mt-3 md:mt-0">
                  <button
                      onClick={() => setIsModalOpen(true)}
    
                      className="inline-block px-4 py-2 text-white duration-150 font-medium bg-green-600 rounded-lg hover:bg-green-500 active:bg-green-700 md:text-sm"
                  >
                      Add member
                  </button>
                  <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              </div>
          </div>
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                      <tr>
                          <th className="py-3 px-6">Username</th>
                          <th className="py-3 px-6">Phone</th>
                          <th className="py-3 px-6">City</th>
                          <th className="py-3 px-6">Loan</th>
                          <th className="py-3 px-6"></th>

                      </tr>
                  </thead>
                  <tbody className="text-gray-600 divide-y">
                      {
                          tableItems.map((item, idx) => (
                              <tr key={idx}>
                                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                      <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                      <div>
                                          <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                          <span className="block text-gray-700 text-xs">{item.email}</span>
                                      </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{item.ward}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{item.city}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{item.debt}</td>
                                  <td className="pr-6 py-4 whitespace-nowrap">
                                      <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "Registered" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
                                          {item.status}
                                      </span>
                                  </td>
                                  <td className="text-right px-6 whitespace-nowrap">
                                      <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                          Edit
                                      </a>
                                      <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                          Delete
                                      </button>
                                  </td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default UserPage;