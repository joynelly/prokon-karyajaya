import React from 'react';
import Navbar from '../../components/Navbar';
import JasaPageContent from '../../components/JasaPageContent'
import Footer from '../../components/Footer';

function JasaPage() {
  return (
    <div className='bg-white-kj'>
        <Navbar />
        <JasaPageContent />
        <Footer />
    </div>
  );
}

export default JasaPage;