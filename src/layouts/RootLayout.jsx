import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, ScrollRestoration } from 'react-router';
import { Bounce, ToastContainer } from 'react-toastify'
import ErrorBoundary from '../components/ErrorBoundary';

const RootLayout = () => {
    return (
        <div className='bg-base-200'>
            <ScrollRestoration />
            <Navbar />
            <ErrorBoundary>
                <main>
                    <Outlet />
                </main>
            </ErrorBoundary>
            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default RootLayout;