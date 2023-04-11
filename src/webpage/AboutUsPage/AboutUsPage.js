import React from 'react';
import Navbar from '../../components/Navbar';
import AboutUsContent from '../../components/AboutUsContent';
import Footer from '../../components/Footer';

function AboutUsPage() {
  return (
    <div className='bg-white-kj'>
        <Navbar />
        <AboutUsContent />
        <Footer />
    </div>
  );
}

export default AboutUsPage;