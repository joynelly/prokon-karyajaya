import React, { Fragment, useEffect, useState } from 'react';
import { getTokenFromLocalStorage } from '../lib/auth';

function UpdatePenjualanContent(){
    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-grey-kj">
                <div className="w-100 relative mt-3 mb-7 mx-20 px-20 pb-5 rounded-xl bg-grey-kj">
                    {/* Judul */}
                    <div className="pb-4 pt-5">
                        <h1 className="text-center text-2xl font-bold font-norwester">UPDATE PENJUALAN</h1>
                    </div>
                    {/* FORM */}
                    <form>
                        <div className="grid grid-cols-2 gap-4 p-4">
                            <h3 className='font-md font-norwester '>ID Produk*</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="text" id="product_id" placeholder="Product ID"/>
                                </div>
                            </div>
                            
                            <h3 className='font-md font-norwester '>Tanggal Penjualan*</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="date" id="tgl_penjualan" placeholder="Tanggal Penjualan"/>
                                </div>
                            </div>
                            
                            <h3 className='font-md font-norwester '>Total Harga</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="number" id="total_harga" placeholder="Total Harga"/>
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

export default UpdatePenjualanContent;