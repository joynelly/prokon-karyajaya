import React, { Fragment, useEffect, useState } from 'react';
import { getTokenFromLocalStorage } from '../lib/auth';

function AddPeminjamanContent(){
    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-grey-kj">
                <div className="w-100 relative mt-3 mb-7 mx-20 px-20 pb-5 rounded-xl bg-grey-kj">
                    {/* Judul */}
                    <div className="pb-4 pt-5">
                        <h1 className="text-center text-2xl font-bold font-norwester">TAMBAH PEMINJAMAN</h1>
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
                            
                            <h3 className='font-md font-norwester '>Tanggal Keluar*</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="datetime-local" id="tgl_keluar" placeholder="Tanggal Keluar"/>
                                </div>
                            </div>
                            
                            <h3 className='font-md font-norwester '>Tanggal Kembali*</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="datetime-local" id="tgl_kembali" placeholder="Tanggal Kembali"/>
                                </div>
                            </div>
                            
                            <h3 className='font-md font-norwester '>Tanggal Dikembalikan</h3>
                            <div className="col-span-2 row-span-1 rounded bg-white p-1 font-serif text-lg leading-8">
                                <div>
                                    <input className="w-full rounded py-1 pl-2" type="datetime-local" id="tgl_dikembalikan" placeholder="Tanggal Dikembalikan"/>
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

export default AddPeminjamanContent;