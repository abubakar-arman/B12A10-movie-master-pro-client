import React from 'react';
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="footer grid grid-cols-1 lg:grid-cols-4 place-items-center sm:footer-horizontal bg-base-300 
             text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Support</a>
                    <a className="link link-hover">Account</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Policies</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Legal Notices</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaSquareXTwitter className='size-8' />
                        </a>
                        <a>
                            <FaYoutube className='size-8' />
                        </a>
                        <a>
                            <FaFacebookSquare className='size-8' />
                        </a>
                    </div>
                </nav>
            </footer>
            <div className='bg-base-300 text-base-content p-5 text-center'>
                <p>© 2025 TimeFlix | Online Movie Streaming</p>
            </div>
        </>
    );
};

export default Footer;