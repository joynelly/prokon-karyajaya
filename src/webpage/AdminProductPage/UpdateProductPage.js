import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import UpdateProductPageContent from '../../components/UpdateProductPageContent';

function UpdateProductPage() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <UpdateProductPageContent />
        <Footer />
    </div>
  );
};

export default UpdateProductPage;