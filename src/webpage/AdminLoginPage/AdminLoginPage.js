import React from 'react';
import Navbar from '../../components/Navbar';
import AdminLoginPageContent from '../../components/AdminLoginPageContent.js';
import Footer from '../../components/Footer';

function AdminLoginPage() {
  return (
    <div className='bg-white-kj'>
        <Navbar />
        <AdminLoginPageContent />
        <Footer />
    </div>
  );
}

export default AdminLoginPage;