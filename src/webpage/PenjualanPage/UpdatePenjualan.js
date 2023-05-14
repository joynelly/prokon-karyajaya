import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import UpdatePenjualanContent from '../../components/UpdatePenjualanContent';

function UpdatePenjualan() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <UpdatePenjualanContent />
        <Footer />
    </div>
  );
};

export default UpdatePenjualan;