import React, { Fragment, useEffect, useState } from 'react';

function AddProductPageContent(){

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [productImage, setProductImage] = useState(null);
    const [description, setDescription] = useState('');

    const handleFormSubmit = (e) => {
        // Mengarahkan ke halaman lain
       
    };

    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-grey-kj">
                <div className="w-100 relative mt-3 mb-7 mx-20 px-20 pb-5 rounded-xl bg-grey-kj">
                    {/* Judul */}
                    <div className="pb-4 pt-5">
                        <h1 className="text-center text-2xl font-bold">ADD PRODUCT FORM</h1>
                    </div>
                    {/* FORM */}
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-2 gap-4 p-4">
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                                </div>
                            </div>
                            <div className="col-span-1 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8 text-grey-500">
                                <div>
                                    <select className="w-full rounded py-1 pl-2 text" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
                                        <option value="">--- Select Brand ---</option>
                                        <option value="Brand 1">Brand 1</option>
                                        <option value="Brand 2">Brand 2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-1 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <select className="w-full rounded py-1 pl-2" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option value="">--- Select Category ---</option>
                                        <option value="Category 1">Category 1</option>
                                        <option value="Category 2">Category 2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-1 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price"/>
                                </div>
                            </div>
                            <div className="col-span-1 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="text" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock"/>
                                </div>
                            </div>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <p className="text-lg pl-2 pb-1 text-gray-400">Cover Image: </p>
                                    <input className="w-full rounded py-1 pl-2" type="file" id="coverImage" onChange={(e) => setCoverImage(e.target.files[0])}/>
                                </div>
                            </div>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <p className="text-lg pl-2 pb-1 text-gray-400">Product Image: </p>
                                    <input className="w-full rounded py-1 pl-2" type="file" id="productImage" onChange={(e) => setProductImage(e.target.files[0])}/>
                                </div>
                            </div>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8 text-center">
                                <div>
                                    <textarea className="w-full h-40 rounded py-1 pl-2" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder ="Description"/>
                                </div>
                            </div>
                            <div className="col-span-2 row-span-1 rounded bg-white font-serif text-lg leading-8 text-center">
                                <button type="submit" className="bg-light-blue-kj w-full rounded p-2 font-semibold hover:bg-white ">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default AddProductPageContent;