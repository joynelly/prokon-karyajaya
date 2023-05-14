import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AdminBrandPageContent from '../../components/AdminBrandPageContent.js';
import Footer from '../../components/Footer';

function AdminBrandPage() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AdminBrandPageContent />
        <Footer />
    </div>
  );
}

export default AdminBrandPage;