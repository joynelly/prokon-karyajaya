import React from 'react';
import Navbar from '../../components/Navbar';
import SellingDashboardContent from '../../components/SellingDashboardContent'
import Footer from '../../components/Footer';

function SellingDashboardPage() {
  return (
    <div className='bg-white-kj'>
        <Navbar />
        <SellingDashboardContent />
        <Footer />
    </div>
  );
}

export default SellingDashboardPage;