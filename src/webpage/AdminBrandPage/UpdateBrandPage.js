import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import UpdateBrandPageContent from '../../components/UpdateBrandPageContent';

function UpdateBrandPage() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <UpdateBrandPageContent />
        <Footer />
    </div>
  );
};

export default UpdateBrandPage;