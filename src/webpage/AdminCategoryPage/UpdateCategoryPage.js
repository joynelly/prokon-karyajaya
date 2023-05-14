import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import UpdateCategoryPageContent from '../../components/UpdateCategoryPageContent';

function UpdateCategoryPage() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <UpdateCategoryPageContent />
        <Footer />
    </div>
  );
};

export default UpdateCategoryPage;