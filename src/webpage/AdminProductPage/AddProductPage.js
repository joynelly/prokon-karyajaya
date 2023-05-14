import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AddProductPageContent from '../../components/AddProductPageContent.js';
import Footer from '../../components/Footer';

function AddProductPage() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AddProductPageContent />
        <Footer />
    </div>
  );
};

export default AddProductPage;