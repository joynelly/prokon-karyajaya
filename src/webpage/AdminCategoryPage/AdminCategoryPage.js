import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AdminCategoryPageContent from '../../components/AdminCategoryPageContent.js';
import Footer from '../../components/Footer';

function AdminCategoryPage() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AdminCategoryPageContent />
        <Footer />
    </div>
  );
}

export default AdminCategoryPage;