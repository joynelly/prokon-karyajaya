import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AdminLandingPageContent from '../../components/AdminLandingPageContent';
import Footer from '../../components/Footer';

function AdminLandingPage() {
  return (
    <div className='bg-white-kj'>
        <AdminNavbar />
        <AdminLandingPageContent />
        <Footer />
    </div>
  );
}

export default AdminLandingPage;