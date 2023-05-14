import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AdminProductPageContent from '../../components/AdminProductPageContent.js';
import Footer from '../../components/Footer';

function AdminProductPage() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AdminProductPageContent />
        <Footer />
    </div>
  );
}

export default AdminProductPage;