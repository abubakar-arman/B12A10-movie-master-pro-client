import React from 'react';
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
    const { logout, isAuthenticated, user } = useAuth()
    const navigate = useNavigate()
    // console.log(user);
    
    // const links = [
    //     { title: 'Home', url: '/' },
    //     { title: 'Movies', url: '/movies' },
    //     { title: 'Add Movie', url: '/add-movie'},
    //     { title: 'Login', url: '/login' },
    //     { title: 'Register', url: '/register' },
    // ]

    const navLinks = <>
        <li key={1}>
            <NavLink to='/' >Home</NavLink>
        </li>
        <li key={2}>
            <NavLink to='/movies' >Movies</NavLink>
        </li>
        {isAuthenticated ? <li key={4}>
            <NavLink to='/add-movie'>Add Movie</NavLink>
        </li> 
        :
         <>
            <li key={3}>
                <NavLink to='/login'>Login</NavLink>
            </li>
            <li key={4}>
                <NavLink to='/register'>Register</NavLink>
            </li>
        </>}
    </>

    const handleLogout = () => {
        logout();
        navigate('/')
    }

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
                        {navLinks}

                    </ul>
                </div>
                <a className="">
                    <img src={logo} alt="" className='w-36' />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navLinks}
                </ul>
            </div>
            {isAuthenticated && <div className="navbar-end">
                <div className="avatar mr-4">
                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                </div>
                <button onClick={handleLogout} className="btn bg-red-700 text-base-100">Logout</button>
            </div>}
        </div>
    );
};

export default Navbar;