import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import moment from 'moment/moment';
import {useAuth} from "../lib/authHook";
import {getTokenFromLocalStorage} from "../lib/auth"

const hanleDelete = (id, code) => {
    if(window.confirm(`Are you sure you want to delete this category (${code})? `)){
        fetch(`${process.env.REACT_APP_API_URL}/categories/${id}`, {
            method: "DELETE",
            headers: {
                // "authorization": `${localStorage.getItem("token")}`,
                "authorization": getTokenFromLocalStorage(),
            },
        })
        .then((res) => {
            console.log(res.status);
            if(res.status === 200){
                alert("Category deleted successfully");
                window.location.reload();
            }else{
                alert(res.message);
            }   
        })
        .catch((err) => {
            alert(err.message);
        });
    }
};

const columns = [
    {
        name: "#",
        selector: "id",
        sortable: true,
        width: "50px",
    },
    {
        name: "Category Code",
        selector: "category_code",
        sortable: true,
    },
    {
        name: "Name",
        selector: "name",
        sortable: true,
    },
    {
        name: "Last Updated",
        selector: "updated_at",
        sortable: true,
        cell: (val) => {
            return moment(val.updated_at).format('DD MMM YYYY HH:mm');
        }
    },
    {
        name: "Actions",
        align: "left",
        sortable: false,
        width: "200px",
        cell: (category) => {
            return (
                <Fragment>
                    <button className="bg-light-blue-kj rounded-xl p-2 px-3 mx-1">
                        <svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  <circle cx="12" cy="12" r="3" />
                        </svg>
                    </button>  
                    <button className="bg-yellow-400 rounded-xl p-2 px-3 mx-1">
                        <svg class="h-6 w-6 text-black" width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                    </button>  
                    <button className="bg-red-400 rounded-xl p-2 px-3 mx-1" onClick={()=>{hanleDelete(category.id, category.category_code)}}>
                        <svg class="h-6 w-6 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    </button>
                </Fragment>
            );
        },
    },

];

function AdminCategoryPageContent(){
    useAuth();
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/categories?sort=id&order=asc`)
        .then((res) => res.json())
        .then((data) => {
            setCategories(data);
            setFilteredCategories(data);
        })
        .catch((err) => {
            alert(err.message);
        });
    }, []);

    const handleFilter = (e) => {
        const newDatas = filteredCategories.filter((category) => {
            return category.name.toLowerCase().includes(e.target.value.toLowerCase());
        }
        );
        setCategories(newDatas);
    };
    

    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-pink-kj">
                {/* Judul */}
                <div className="pb-8">
                    <h1 className="text-center text-2xl font-bold">CATEGORIES</h1>
                </div>
                {/* Add and Search */}
                <div className="flex items-center justify-between">
                    <button className="bg-light-blue-kj rounded-xl p-3 font-semibold text-white">
                        + Add Category
                    </button>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded-full py-2 pl-4 pr-20 bg-grey-kj text-white mr-2"
                            onChange={handleFilter}
                        />
                        <button className="bg-light-blue-kj rounded-full p-2 px-5">
                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                        </button>
                    </div>
                </div>
                <hr className="border-grey-kj border-b-1 my-6"/>
                {/* List Categories */}
                <div className="container mx-auto">
                    <DataTable
                        columns={columns}
                        data={categories}
                        pagination
                        responsive
                        highlightOnHover
                        dense
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default AdminCategoryPageContent;