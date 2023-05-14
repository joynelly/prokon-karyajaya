import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const categories = [
    {
      id: 1,
      code: 'C00001',
      name: 'Category 1',
      updated: '5 month ago'
    },
    {
      id: 2,
      code: 'C00002',
      name: 'Category 2',
      updated: '3 month ago'
    },
    {
      id: 3,
      code: 'C00003',
      name: 'Category 3',
      updated: '7 month ago'
    },
    {
      id: 4,
      code: 'C00004',
      name: 'Category 4',
      updated: '6 month ago'
    },
    {
      id: 5,
      code: 'C00005',
      name: 'Category 5',
      updated: '10 month ago'
    },
    // Add more products here...
];

function AdminCategoryPageContent(){
    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-pink-kj">
                {/* Judul */}
                <div className="pb-8">
                    <h1 className="text-center text-2xl font-bold">CATEGORIES</h1>
                </div>
                {/* Add and Search */}
                <div className="flex items-center justify-between">
                    <button className="bg-dark-blue-kj rounded-xl p-3 font-semibold text-white hover:bg-light-blue-kj">
                        <a href="/addcategorypage">
                            + Add Categories
                        </a>
                    </button>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded-full py-2 pl-4 pr-20 bg-grey-kj text-white mr-2"
                        />
                        <button className="bg-dark-blue-kj rounded-full p-2 px-5 hover:bg-light-blue-kj">
                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                        </button>
                    </div>
                </div>
                <hr className="border-grey-kj border-b-1 my-6"/>
                {/* List Categories */}
                <div className="container mx-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b text-left">#</th>
                                <th className="py-2 px-4 border-b text-left">Category Code</th>
                                <th className="py-2 px-4 border-b text-left">Name</th>
                                <th className="py-2 px-4 border-b text-left">Last Updated</th>
                                <th className="py-2 px-4 border-b text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id}>
                                    <td className="py-2 px-4 border-b text-left">{category.id}</td>
                                    <td className="py-2 px-4 border-b text-left">{category.code}</td>
                                    <td className="py-2 px-4 border-b text-left">{category.name}</td>
                                    <td className="py-2 px-4 border-b text-left">{category.updated}</td>
                                    <td className="py-2 px-4 border-b text-left">
                                        <button className="bg-dark-blue-kj rounded-xl p-2 px-3 mx-1 hover:bg-light-blue-kj">
                                            <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        </button>  
                                        <button className="bg-yellow-600 rounded-xl p-2 px-3 mx-1 hover:bg-yellow-300">
                                            <svg class="h-6 w-6 text-black" width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                        </button>  
                                        <button className="bg-red-600 rounded-xl p-2 px-3 mx-1 hover:bg-red-300">
                                            <svg class="h-6 w-6 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default AdminCategoryPageContent;