import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import AddPeminjamanContent from '../../components/AddPeminjamanContent';

function AddPeminjaman() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AddPeminjamanContent />
        <Footer />
    </div>
  );
};

export default AddPeminjaman;