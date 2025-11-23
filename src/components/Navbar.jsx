import React from 'react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = [
        { title: 'Home', url: '/' },
        { title: 'Movies', url: '/movies' },
        // { title: 'Register', url: '/register' },
        // { title: 'Login', url: '/login' },
    ]

    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
                        {links.map((link, i) => <li key={i}><NavLink to={link.url}>{link.title}</NavLink></li>)}

                    </ul>
                </div>
                <a className="">
                    <img src={logo} alt="" className='w-36' />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {links.map((link, i) => <li key={i}><NavLink to={link.url}>{link.title}</NavLink></li>)}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar mr-4">
                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                </div>
                <a className="btn bg-red-700 text-base-100">Logout</a>
            </div>
        </div>
    );
};

export default Navbar;