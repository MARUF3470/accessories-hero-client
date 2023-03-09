import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { BsCart3, BsSuitHeart } from 'react-icons/bs';
import { motion } from "framer-motion"
import '../../App.css'
import ScrollTrigger from 'gsap/ScrollTrigger';
import CardDrawer from './CardDrawer';
const Header = () => {
    const [search, setSearch] = useState(false)
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'main-tool-bar--scrolled', targets: '.main-tool-bar' }
    });

    const menu = <>
        <Link className='btn btn-ghost' to='/'>Home</Link>
        <Link className='btn btn-ghost' to='/about'>About</Link>
        <Link className='btn btn-ghost' to='/contact'>Contact Us</Link>
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-gray-600 bg-opacity-10">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 font-semibold uppercase">Accessories Hero</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal h-12">
                            {menu}
                            <div>
                                <div className="drawer drawer-end">
                                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content flex justify-end gap-1">
                                        {search ? <motion.input initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: .1,
                                            }} type="text" placeholder="Type here" className="input text-sm input-bordered input-primary w-full" /> : <button onClick={() => setSearch(true)} className='btn btn-ghost p-2'><RiSearch2Line className='w-6 h-6'></RiSearch2Line></button>}
                                        <Link to='/login' className="drawer-button btn btn-ghost p-2"><FiUser className='w-6 h-6'></FiUser></Link>
                                        <Link to='/wishlist' className="drawer-button btn btn-ghost p-2"><BsSuitHeart className='w-6 h-6'></BsSuitHeart></Link>
                                        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost p-2"><BsCart3 className='w-6 h-6'></BsCart3></label>
                                    </div>
                                    <CardDrawer></CardDrawer>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
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