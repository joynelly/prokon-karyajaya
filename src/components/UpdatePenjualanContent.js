import React, { Fragment, useEffect, useState } from 'react';
import { getTokenFromLocalStorage } from '../lib/auth';
import { useParams } from 'react-router';
import Select from 'react-select';
import { parse, format } from 'date-fns';

function UpdatePenjualanContent(){
    const [product, setProduct] = useState([]);
    const [defaultProduct, setDefaultProduct] = useState([]);
    const [productList, setProductList] = useState([]);
    const [tgl_penjualan, setTgl_penjualan] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
        .then((res) => res.json())
        .then((data) => {
            const options = data.map((product) => ({
                "value" : product.id,
                "label" : `${product.product_code} - ${product.name}`,
            }));
            setProductList(options);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/penjualan/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setProduct([]);
            data.detail_penjualans.map((element) => {
                let default_value = {};
                default_value.value = element.product.id;
                default_value.label = `${element.product.product_code} - ${element.product.name}`;
                setProduct(product => [...product, default_value]);
            });
            let date = new Date(data.tanggal_penjualan).toLocaleString();
            let parsedDate = parse(date, 'M/d/yyyy, h:mm:ss a', new Date());
            let formattedDateTime = format(parsedDate, "yyyy-MM-dd'T'HH:mm");
            setTgl_penjualan(formattedDateTime);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const handleFormSubmit = (e) => {
        // Mengarahkan ke halaman lain
        e.preventDefault();
        const formData = new FormData();
        product.forEach(element => {
            formData.append('product_id', element.value);
        });
        formData.append('tanggal_penjualan', tgl_penjualan);

        fetch(`${process.env.REACT_APP_API_URL}/penjualan/${id}`, {
            method: "PUT",
            headers: {
                "authorization": getTokenFromLocalStorage(),
            },
            body: formData,
        })
        .then((res) => {
            if(res.status === 200){
                return res.json();
            } else {
                throw Error("Gagal mengupdate penjualan");
            }
        })
        .then((data) => {
            console.log(data);
            window.location.href = '/penjualan';
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const filterOptions = (candidate, input) => {
        if (input) {
          if (candidate.label.toLowerCase().includes(input.toLowerCase()))
            return true;
          if (
            product.some((opt) => {
              if (opt.value === candidate.value) return true;
              else return false;
            })
          )
            return true;
          return false;
        }
        return true;
      };

    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-grey-kj">
                <div className="w-100 relative mt-3 mb-7 mx-20 px-20 pb-5 rounded-xl bg-grey-kj">
                    {/* Judul */}
                    <div className="pb-4 pt-5">
                        <h1 className="text-center text-2xl font-bold font-norwester">TAMBAH PENJUALAN</h1>
                    </div>
                    {/* FORM */}
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-2 gap-4 p-4">
                            <h3 className='font-md font-norwester '>Produk*</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                <Select
                                    className="w-full rounded py-1 pl-2 text"
                                    id="product"
                                    value={product}
                                    onChange={(value) => setProduct(value)}
                                    options={productList}
                                    isSearchable
                                    isMulti
                                    filterOption={filterOptions}
                                />
                                    {/* <input className="w-full rounded py-1 pl-2" type="text" id="product_id" placeholder="Product ID"/> */}
                                </div>
                            </div>
                            
                            <h3 className='font-md font-norwester '>Tanggal Penjualan*</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="datetime-local" id="tgl_penjualan" placeholder="Tanggal Penjualan" value={tgl_penjualan} onChange={(e) =>{setTgl_penjualan(e.target.value)} } />
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

export default UpdatePenjualanContent;