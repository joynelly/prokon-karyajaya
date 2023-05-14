import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AdminDetailProductContent from '../../components/AdminDetailProductContent.js';
import Footer from '../../components/Footer';

function AdminDetailProductPage() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AdminDetailProductContent />
        <Footer />
    </div>
  );
}

export default AdminDetailProductPage;