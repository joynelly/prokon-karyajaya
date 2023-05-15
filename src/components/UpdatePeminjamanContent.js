import React, { Fragment, useEffect, useState } from 'react';
import { getTokenFromLocalStorage } from '../lib/auth';
import { useParams } from 'react-router';
import Select from 'react-select';
import { parse, format } from 'date-fns';

function UpdatePeminjamanContent(){
    const [product, setProduct] = useState('');
    const [productList, setProductList] = useState([]);
    const [tgl_keluar, setTgl_keluar] = useState('');
    const [tgl_kembali, setTgl_kembali] = useState('');
    const [tgl_dikembalikan, setTgl_dikembalikan] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
        .then((res) => res.json())
        .then((data) => {
            const options = data.map((product) => ({
                "value" : product.id,
                "label" : `${product.product_code} - ${product.name}`,
            }));
            console.log(options);
            setProductList(options);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/peminjaman/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setProduct([]);
            data.detail_peminjamans.forEach(element => {
                element.value = element.id;
                element.label = `${element.product.product_code} - ${element.product.name}`;
                setProduct(product => [...product, element]);
            });
            let date = new Date(data.tanggal_keluar).toLocaleString();
            let parsedDate = parse(date, 'M/d/yyyy, h:mm:ss a', new Date());
            let formattedDateTime = format(parsedDate, "yyyy-MM-dd'T'HH:mm");
            setTgl_keluar(formattedDateTime);
            date = new Date(data.tanggal_kembali).toLocaleString();
            parsedDate = parse(date, 'M/d/yyyy, h:mm:ss a', new Date());
            formattedDateTime = format(parsedDate, "yyyy-MM-dd'T'HH:mm");
            setTgl_kembali(formattedDateTime);
            if(data.tanggal_dikembalikan !== null){
                date = new Date(data.tanggal_dikembalikan).toLocaleString();
                parsedDate = parse(date, 'M/d/yyyy, h:mm:ss a', new Date());
                formattedDateTime = format(parsedDate, "yyyy-MM-dd'T'HH:mm");
                setTgl_dikembalikan(formattedDateTime);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const handleFormSubmit = (e) => {
        // Mengarahkan ke halaman lain
        e.preventDefault();
        const formData = new FormData();
        product.forEach(element => {
            formData.append('product_id', element.value);
        });
        formData.append('tanggal_keluar', tgl_keluar);
        formData.append('tanggal_kembali', tgl_kembali);
        formData.append('tanggal_dikembalikan', tgl_dikembalikan);

        fetch(`${process.env.REACT_APP_API_URL}/peminjaman/${id}`, {
            method: "PUT",
            headers: {
                "authorization": getTokenFromLocalStorage(),
            },
            body: formData,
        })
        .then((res) => {
            if(res.status === 200){
                alert("Peminjaman berhasil diupdate!");
                window.location.href = "/adminpeminjaman";
            }
            else{
                throw new Error("Gagal mengupdate peminjaman " + res.status);
            }
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-grey-kj">
                <div className="w-100 relative mt-3 mb-7 mx-20 px-20 pb-5 rounded-xl bg-grey-kj">
                    {/* Judul */}
                    <div className="pb-4 pt-5">
                        <h1 className="text-center text-2xl font-bold font-norwester">UPDATE PEMINJAMAN</h1>
                    </div>
                    {/* FORM */}
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-2 gap-4 p-4">
                            <h3 className='font-md font-norwester '>ID Produk*</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                <Select
                                    className="w-full rounded py-1 pl-2 text"
                                    id="product"
                                    value={product}
                                    onChange={(value) => {
                                        if(!product.includes(value)){
                                            setProduct(value)
                                        }
                                    }}
                                    options={productList}
                                    isSearchable
                                    isMulti
                                    isDisabled
                                />
                                    {/* <input className="w-full rounded py-1 pl-2" type="text" id="product_id" placeholder="Product ID"/> */}
                                </div>
                            </div>
                            
                            <h3 className='font-md font-norwester '>Tanggal Keluar*</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="datetime-local" id="tgl_keluar" placeholder="Tanggal Keluar" value={tgl_keluar} onChange={(e)=>{setTgl_keluar(e.target.value); console.log(tgl_keluar)}}/>
                                </div>
                            </div>
                            
                            <h3 className='font-md font-norwester '>Tanggal Kembali*</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="datetime-local" id="tgl_kembali" placeholder="Tanggal Kembali" value={tgl_kembali} onChange={(e)=>{setTgl_kembali(e.target.value)}}/>
                                </div>
                            </div>
                            <h3 className='font-md font-norwester '>Tanggal Dikembalikan*</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="datetime-local" id="tgl_kembali" placeholder="Tanggal Kembali" value={tgl_dikembalikan} onChange={(e)=>{setTgl_dikembalikan(e.target.value)}}/>
                                </div>
                            </div>
                            <div className="col-span-2 row-span-1 rounded bg-white font-serif text-lg leading-8 text-center">
                                <button type="submit" className="bg-light-blue-kj w-full rounded p-2 font-semibold hover:bg-dark-blue-kj ">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default UpdatePeminjamanContent;