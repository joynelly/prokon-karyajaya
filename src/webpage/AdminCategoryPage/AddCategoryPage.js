import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AddCategoryPageContent from '../../components/AddCategoryPageContent.js';
import Footer from '../../components/Footer';

function AddCategoryPage() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AddCategoryPageContent />
        <Footer />
    </div>
  );
};

export default AddCategoryPage;