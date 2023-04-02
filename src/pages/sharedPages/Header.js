import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { BsCart3, BsSuitHeart } from 'react-icons/bs';
import { motion } from "framer-motion"
import '../../App.css'
import ScrollTrigger from 'gsap/ScrollTrigger';
import CardDrawer from './CardDrawer';
import Footer from './Footer';
import { AuthContext } from '../../Authentication/AuthProvider';
import { FaUser } from 'react-icons/fa';

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(res => { })
            .catch(err => console.log(err))
    }
    const [search, setSearch] = useState(false)
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'main-tool-bar--scrolled', targets: '.main-tool-bar' }
    });
    const menu = <>
        {user ? <div className="avatar btn btn-circle btn-ghost">
            <div className="w-12 rounded-full">
                <img src={user?.photoURL} alt='user' />
            </div>
        </div> : <FaUser className='w-8 h-8'></FaUser>}
        <Link className='btn btn-ghost' to='/'>Home</Link>
        <Link className='btn btn-ghost focus:btn-warning' to='/shop'>Shop</Link>
        <Link className='btn btn-ghost focus:btn-warning' to='/about'>About</Link>
        <Link className='btn btn-ghost focus:btn-warning' to='/contact'>Contact Us</Link>

        <li className='btn btn-ghost p-0'>
            <a>
                Pages
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="bg-white w-48 lg:w-72 p-4 rounded-none">
                <motion.li whileHover={{ scale: 1.2 }}><Link className='hover:text-purple-500' to='/addproduct'>Add Product</Link></motion.li>
                <motion.li whileHover={{ scale: 1.2 }}><Link className='hover:text-purple-500' to='/myproducts'>My Product</Link></motion.li>
                <motion.li whileHover={{ scale: 1.2 }}><Link className='hover:text-purple-500'>All Users</Link></motion.li>
                <motion.li whileHover={{ scale: 1.2 }}><Link className='hover:text-purple-500'>Wishlist</Link></motion.li>
                <motion.li whileHover={{ scale: 1.2 }}><Link className='hover:text-purple-500' to='cartitems'>Cart</Link></motion.li>
                {user?.email ? <motion.li whileHover={{ scale: 1.2 }}><Link onClick={handleLogout} className='hover:text-purple-500'>Sign Out</Link></motion.li> : <><motion.li whileHover={{ scale: 1.2 }}><Link className='hover:text-purple-500' to='/login'>Sign In</Link></motion.li>
                    <motion.li whileHover={{ scale: 1.2 }}><Link className='hover:text-purple-500' to='/registretion'>Register</Link></motion.li></>}
            </ul>
        </li>
    </>
    return (
        <div className="drawer">
            <>

                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className='bla bla bla'
                    style={{ width: "500px" }}
                >
                    <CardDrawer toggleDrawer={toggleDrawer}></CardDrawer>
                </Drawer>
            </>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }} className="w-full navbar bg-gray-600 sticky top-0 z-50 bg-opacity-10">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 font-semibold uppercase">Accessories Hero</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal h-12">
                            {menu}
                            <div className='flex gap-4 ml-20 mr-4'>
                                <button><Link to='/login' className=" w-6 h-6 "><FiUser className='w-6 h-6'></FiUser></Link></button>
                                <button> <Link to='/wishlist' className=" w-6 h-6 "><BsSuitHeart className='w-6 h-6'></BsSuitHeart></Link></button>
                                <button onClick={toggleDrawer}><BsCart3 className='w-6 h-6'></BsCart3></button>
                            </div>
                        </ul>
                    </div>
                </motion.div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-1/2 bg-base-100">
                    <div className="flex-none lg:hidden">
                        <motion.label whileTap={{ scale: 3 }} htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <IoMdClose className='w-8 h-8'></IoMdClose>
                        </motion.label>
                    </div>
                    {menu}

                </ul>
            </div>
        </div>
    );
};
export default Header;