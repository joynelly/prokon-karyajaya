import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import AdminListPenjualanContent from '../../components/AdminListPenjualanContent';

function ListPenjualan() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AdminListPenjualanContent />
        <Footer />
    </div>
  );
}

export default ListPenjualan;