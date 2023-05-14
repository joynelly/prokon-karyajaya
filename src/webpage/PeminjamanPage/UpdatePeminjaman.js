import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import UpdatePeminjamanContent from '../../components/UpdatePeminjamanContent';

function UpdatePeminjaman() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <UpdatePeminjamanContent />
        <Footer />
    </div>
  );
};

export default UpdatePeminjaman;