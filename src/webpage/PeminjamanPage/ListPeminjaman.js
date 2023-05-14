import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AdminListPeminjamanContent from '../../components/AdminListPeminjamanContent';
import Footer from '../../components/Footer';

function ListPeminjaman() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AdminListPeminjamanContent />
        <Footer />
    </div>
  );
}

export default ListPeminjaman;