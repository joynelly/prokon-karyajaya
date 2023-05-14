import React from 'react';
import Navbar from '../../components/Navbar';
import DetailProductContent from '../../components/DetailProductContent';
import Footer from '../../components/Footer';

function DetailProductPage() {
  return (
    <div className='bg-white-kj'>
        <Navbar />
        <DetailProductContent />
        <Footer />
    </div>
  );
}

export default DetailProductPage;