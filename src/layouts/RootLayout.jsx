import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className='bg-base-200'>
            <Navbar />
            <Footer />
        </div>
    );
};

export default RootLayout;