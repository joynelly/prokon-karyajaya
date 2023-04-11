import React from 'react';
import Footer from '../../components/Footer';
import LandingPageContent from '../../components/LandingPageContent';
import Navbar from '../../components/Navbar';
import SlideBanner from '../../components/SlideBanner';

function LandingPage() {
  return (
    <div className='bg-white-kj'>
        <Navbar />
        <SlideBanner />
        <LandingPageContent />
        <Footer />
    </div>
  );
}

export default LandingPage;