import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, ScrollRestoration } from 'react-router';

const RootLayout = () => {
    return (
        <div className='bg-base-200'>
            <ScrollRestoration />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;