import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AddBrandPageContent from '../../components/AddBrandPageContent.js';
import Footer from '../../components/Footer';

function AddBrandPage() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AddBrandPageContent />
        <Footer />
    </div>
  );
};

export default AddBrandPage;