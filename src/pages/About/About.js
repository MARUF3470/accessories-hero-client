import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { CiMobile1 } from 'react-icons/ci';
import { FaDeskpro, FaWpforms } from 'react-icons/fa';
import Slider from './Slider';
import { motion } from 'framer-motion';
import TeamMembersSlider from './TeamMembersSlider';

const About = () => {
    return (
        <div>
            <div className="hero h-[500px]" style={{ backgroundImage: `url("https://rare-gallery.com/uploads/posts/5395161-crowd-beach-sunset-sunrise-water-sea-ocean-outdoors-friends-group-horizon-landscape-nature-friendship-friend-flag-holiday-island-person-photographer-free-images.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Our Accessories Shop</h1>
                        <p className="mb-5">We are one of the leading accessories shop in our country and hopefully we become the No.1 shop in Banglades</p>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 w-3/4 mx-auto my-20'>
                <div>
                    <h3 className='text-3xl font-semibold text-slate-900'>It started with a
                        <br />
                        bang now we are here.</h3>
                </div>
                <div>
                    Ut at maximus magna. Vestibulum interdum sapien in facilisis imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ac placerat risus. Nullam eget tortor felis. Nulla facilisi.Vestibulum mattis diam non luctus elementum. Cras sollicitudin, nisi in semper viverra, felis diam consequat mi, quis tincidunt ligula

                    Nam nibh diam, varius quis lectus eget, laoreet cursus metus. morbi augue lectus, dapibus eget justo nec, consectetur auctor nis luctus neque.!
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 w-3/4 mx-auto my-10 '>

                <div className='border px-8 py-12 hover:shadow-xl' style={{ transition: 'all 500ms ease' }}>
                    <div className='flex justify-between'>
                        <FaDeskpro className='w-8 h-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'></FaDeskpro>
                        <BsArrowUpRight className='w-6 h-6 hover:text-red-500'></BsArrowUpRight>
                    </div>
                    <div className='mt-8'>
                        <small>10k</small>
                        <h1 className='text-2xl font-semibold text-slate-900 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>New Products</h1>
                    </div>
                </div>
                <div className='border px-8 py-12 hover:shadow-xl' style={{ transition: 'all 500ms ease' }}>
                    <div className='flex justify-between'>
                        <CiMobile1 className='w-8 h-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'></CiMobile1>
                        <BsArrowUpRight className='w-6 h-6 hover:text-red-500'></BsArrowUpRight>
                    </div>
                    <div className='mt-8'>
                        <small>5k</small>
                        <h1 className='text-2xl font-semibold text-slate-900 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>Lovely Customer</h1>
                    </div>
                </div>
                <div className='border px-8 py-12 hover:shadow-xl' style={{ transition: 'all 500ms ease' }}>
                    <div className='flex justify-between'>
                        <FaWpforms className='w-8 h-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'></FaWpforms>
                        <BsArrowUpRight className='w-6 h-6 hover:text-red-500'></BsArrowUpRight>
                    </div>
                    <motion.div className='mt-8'>
                        <small>25h</small>
                        <h1 className='text-2xl font-semibold text-slate-900 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>Support</h1>
                    </motion.div>
                </div>
            </div>
            <Slider></Slider>
            <div className='mt-20 w-11/12 mx-auto'>
                <h1 className='text-6xl font-extrabold text-slate-900 mb-10'>Our <span className='text-rose-500'>Team,</span> <br /> Many Talents</h1>
                <TeamMembersSlider></TeamMembersSlider>
            </div>
        </div>
    );
};

export default About;