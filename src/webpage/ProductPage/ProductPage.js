import React from 'react';
import Navbar from '../../components/Navbar';
import ProductPageContent from '../../components/ProductPageContent'
import Footer from '../../components/Footer';

function ProductPage() {
  return (
    <div className='bg-white-kj'>
        <Navbar />
        <ProductPageContent />
        <Footer />
    </div>
  );
}

export default ProductPage;