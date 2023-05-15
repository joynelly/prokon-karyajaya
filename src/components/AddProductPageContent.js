import React, { Fragment, useEffect, useState } from 'react';
import { getTokenFromLocalStorage } from '../lib/auth';

function AddProductPageContent(){
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [brandList, setBrandList] = useState([]);
    const [category, setCategory] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [tokopediaUrl, setTokopediaUrl] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [productImage, setProductImage] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/brands`)
        .then((res) => res.json())
        .then((data) => {
            setBrandList(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/categories`)
        .then((res) => res.json())
        .then((data) => {
            setCategoryList(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const handleFormSubmit = (e) => {
        // Mengarahkan ke halaman lain
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('brand_id', brand);
        formData.append('category_id', category);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('tokopedia_url', tokopediaUrl);
        formData.append('cover', coverImage);
        for(let i = 0; i < productImage.length; i++){
            formData.append('product_images', productImage[i]);
        }
        formData.append('description', description);
        
        fetch(`${process.env.REACT_APP_API_URL}/products`, {
            method: "POST",
            headers: {
                // "authorization": `${localStorage.getItem("token")}`,
                "authorization": getTokenFromLocalStorage(),
            },
            body: formData,
        })
        .then((res) => {
            console.log(res.status);
            if(res.status === 200){
                alert("Product added successfully");
                window.location.href = "/adminproductpage";
            }else{
                alert(res.message);
            }   
        })
        .catch((err) => {
            alert(err.message);
        });
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
                                        {
                                            brandList.map((brand) => (
                                                <option key={brand.id} value={brand.id}>{brand.name}</option>  
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-1 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <select className="w-full rounded py-1 pl-2" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option value="">--- Select Category ---</option>
                                        {
                                            categoryList.map((category) => (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            ))
                                        }
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
                                    <input className="w-full rounded py-1 pl-2" type="text" id="tokopedia" value={tokopediaUrl} onChange={(e) => setTokopediaUrl(e.target.value)} placeholder="Tokopedia URL"/>
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
                                    <input className="w-full rounded py-1 pl-2" type="file" id="productImage" multiple onChange={(e) => setProductImage(e.target.files)}/>
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