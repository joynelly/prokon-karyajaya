import React, { Fragment, useEffect, useState } from 'react';
import { getTokenFromLocalStorage } from '../lib/auth';

function AddCategoryPageContent(){

    const [name, setName] = useState('');
    const [image, setImage] = useState(null);

    const handleFormSubmit = (e) => {
        // Mengarahkan ke halaman lain
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);

        fetch(`${process.env.REACT_APP_API_URL}/categories`, {
            method: 'POST',
            headers: {
                "authorization": getTokenFromLocalStorage(),
            },
            body: formData
        }).then(response => {
            if(response.status === 200){
                window.location.href = "/admincategorypage"
            }else{
                alert("Something went wrong, please try again later");
            }
        }).catch(error => {
            console.log(error);
        });
    };

    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-grey-kj">
                <div className="w-100 relative mt-3 mb-7 mx-20 px-20 pb-5 rounded-xl bg-grey-kj">
                    {/* Judul */}
                    <div className="pb-4 pt-5">
                        <h1 className="text-center text-2xl font-bold">ADD CATEGORY FORM</h1>
                    </div>
                    {/* FORM */}
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-1 gap-4 p-4">
                            <div className="col-span-1 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                                </div>
                            </div>
                            <div className="col-span-1 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <p className="text-lg pl-2 pb-1 text-gray-400">Category Image: </p>
                                    <input className="w-full rounded py-1 pl-2" type="file" id="categoryImage" onChange={(e) => setImage(e.target.files[0])}/>
                                </div>
                            </div>
                            <div className="col-span-1 row-span-1 rounded bg-white font-serif text-lg leading-8 text-center">
                                <button type="submit" className="bg-light-blue-kj w-full rounded p-2 font-semibold hover:bg-white ">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default AddCategoryPageContent;