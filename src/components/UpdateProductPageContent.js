import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getTokenFromLocalStorage } from '../lib/auth';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function UpdateProductPageContent() {
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
    const [oldProductImage, setOldProductImage] = useState([]);
    const [description, setDescription] = useState('');

    const { id } = useParams();

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

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setName(data.name);
            setBrand(data.brand_id);
            setCategory(data.category_id);
            setPrice(data.price);
            setStock(data.stock);
            setTokopediaUrl(data.tokopedia_url);
            setDescription(data.description);
            setOldProductImage([]);
            data.product_images.map((item) => {
                let image_url = `${process.env.REACT_APP_API_URL}/${item.image_url}`;
                if(!oldProductImage.includes({ image_url: image_url, id: item.id })){
                    setOldProductImage((oldProductImage) => [...oldProductImage, { image_url: image_url, id: item.id }]);
                }
            })

        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);
    
    const handleFormSubmit = (e) => {
        // Mengarahkan ke halaman lain
        e.preventDefault();
        if(!window.confirm('Are you sure want to update this product?')) return false;
        let formData = new FormData();
        formData.append('name', name);
        formData.append('brand_id', brand);
        formData.append('category_id', category);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('tokopedia_url', tokopediaUrl);
        formData.append('description', description);
        if(coverImage !== null){
            formData.append('cover_image', coverImage);
        }
        for(let i = 0; i < productImage.length; i++){
            formData.append('product_images', productImage[i]);
        }
        fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
            method: 'PUT',
            headers: {
                'authorization': getTokenFromLocalStorage(),
            },
            body: formData,
        })
        .then((res) => {
            if(res.status === 200){
                alert('Product updated successfully!');
                window.location.href = '/products';
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const handleDeleteProductImage = (e) => {
        // Menghapus gambar
        e.preventDefault();
        if(!window.confirm('Are you sure want to delete this product image?')) return false;
        let image_url = e.target.getAttribute('data-image-url');
        let image_id = e.target.getAttribute('data-id');
        fetch(`${process.env.REACT_APP_API_URL}/products/${id}/images/${image_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': getTokenFromLocalStorage(),
            },
        })
        .then((res) => {
            if(res.status === 200){
                alert('Product image deleted successfully!');
                let newOldProductImage = oldProductImage.filter((item) => item.image_url !== image_url);
                setOldProductImage(newOldProductImage);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };
    
    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-grey-kj">
                <div className="w-100 relative mt-3 mb-7 mx-20 px-20 pb-5 rounded-xl bg-grey-kj">
                    {/* Judul */}
                    <div className="pb-4 pt-5">
                        <h1 className="text-center text-2xl font-bold">UPDATE PRODUCT FORM</h1>
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
                                    <div className='flex flex-row items-center'>
                                    {
                                        oldProductImage.map((image) => (
                                            
                                                <div className='m-1'>
                                                    <img className="w-100 h-40" src={image.image_url} alt={image.name}/> 
                                                    <button type="button" className="bg-red-500 text-white w-full" 
                                                        data-image-url={image.image_url} data-id={image.id} onClick={handleDeleteProductImage}>Delete</button>
                                                </div>
                                            
                                        ))
                                    }
                                    </div>
                                    <p className="text-lg pl-2 pb-1 text-gray-400">Add Another Images: </p>
                                    <input className="w-full rounded py-1 pl-2" type="file" id="productImage" multiple onChange={(e) => setProductImage(e.target.files)}/>
                                </div>
                            </div>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8 text-center">
                            <div className='h-80'>
                                    <ReactQuill
                                        theme="snow"
                                        value={description}
                                        onChange={setDescription}
                                        className='w-full rounded py-1 pl-2 h-60'
                                        formats={{
                                            header: ['1', '2', '3', '4', '5', '6', false],
                                            bold: 'bold',
                                            italic: 'italic',
                                            underline: 'underline',
                                            strike: 'strike',
                                            list: ['ordered', 'bullet'],
                                            indent: ['-1', '+1'],
                                            align: ['center', 'right', 'justify'],
                                            link: 'link',
                                        }}
                                    />
                                    {/* <textarea className="w-full h-40 rounded py-1 pl-2" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder ="Description"/> */}
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

export default UpdateProductPageContent;