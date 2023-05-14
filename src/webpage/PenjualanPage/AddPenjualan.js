import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import AddPenjualanContent from '../../components/AddPenjualanContent';

function AddPenjualan() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AddPenjualanContent />
        <Footer />
    </div>
  );
};

export default AddPenjualan;