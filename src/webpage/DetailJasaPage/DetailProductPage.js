import React from 'react';
import Navbar from '../../components/Navbar';
import DetailJasaContent from '../../components/DetailJasaContent';
import Footer from '../../components/Footer';

function DetailJasaPage() {
  return (
    <div className='bg-white-kj'>
        <Navbar />
        <DetailJasaContent />
        <Footer />
    </div>
  );
}

export default DetailJasaPage;