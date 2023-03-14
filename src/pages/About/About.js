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
            <div className='w-11/12 mx-auto mt-32 mb-2 '>
                <marquee behavior="scroll" direction="left" scrollamount="10">
                    <div className='flex gap-4'>
                        <img className='w-60 rounded-md border' src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt="" />
                        <img className='w-60 rounded-md border' src="https://web.programming-hero.com/thumbnail.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://1000logos.net/wp-content/uploads/2022/08/Ola-Cabs-Logo.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://support.content.office.net/en-us/media/f1c4b693-4670-4e7a-8102-bbf1749e83fe.jpg" alt="" />
                        <img className='w-60 rounded-md border' src="https://futurestartup.com/wp-content/uploads/2021/06/Airbnb.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://cdn.corporate.walmart.com/dims4/WMT/78e3751/2147483647/strip/true/crop/1600x899+0+0/resize/920x517!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fb5%2F37%2Fa02c03d4449d8fed8b4519933720%2Fwalmart-and-netflix-logos.jpg" alt="" />
                        <img className='w-60 rounded-md border' src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt="" />
                        <img className='w-60 rounded-md border' src="https://web.programming-hero.com/thumbnail.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://1000logos.net/wp-content/uploads/2022/08/Ola-Cabs-Logo.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://support.content.office.net/en-us/media/f1c4b693-4670-4e7a-8102-bbf1749e83fe.jpg" alt="" />
                        <img className='w-60 rounded-md border' src="https://futurestartup.com/wp-content/uploads/2021/06/Airbnb.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://cdn.corporate.walmart.com/dims4/WMT/78e3751/2147483647/strip/true/crop/1600x899+0+0/resize/920x517!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fb5%2F37%2Fa02c03d4449d8fed8b4519933720%2Fwalmart-and-netflix-logos.jpg" alt="" />
                    </div>
                </marquee>
            </div>
            <div className='w-11/12 mx-auto mb-24 '>
                <marquee behavior="scroll" direction="right" scrollamount="10">
                    <div className='flex gap-4'>
                        <img className='w-60 rounded-md border' src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt="" />
                        <img className='w-60 rounded-md border' src="https://web.programming-hero.com/thumbnail.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://1000logos.net/wp-content/uploads/2022/08/Ola-Cabs-Logo.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://support.content.office.net/en-us/media/f1c4b693-4670-4e7a-8102-bbf1749e83fe.jpg" alt="" />
                        <img className='w-60 rounded-md border' src="https://futurestartup.com/wp-content/uploads/2021/06/Airbnb.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://cdn.corporate.walmart.com/dims4/WMT/78e3751/2147483647/strip/true/crop/1600x899+0+0/resize/920x517!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fb5%2F37%2Fa02c03d4449d8fed8b4519933720%2Fwalmart-and-netflix-logos.jpg" alt="" />
                        <img className='w-60 rounded-md border' src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt="" />
                        <img className='w-60 rounded-md border' src="https://web.programming-hero.com/thumbnail.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://1000logos.net/wp-content/uploads/2022/08/Ola-Cabs-Logo.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://support.content.office.net/en-us/media/f1c4b693-4670-4e7a-8102-bbf1749e83fe.jpg" alt="" />
                        <img className='w-60 rounded-md border' src="https://futurestartup.com/wp-content/uploads/2021/06/Airbnb.png" alt="" />
                        <img className='w-60 rounded-md border' src="https://cdn.corporate.walmart.com/dims4/WMT/78e3751/2147483647/strip/true/crop/1600x899+0+0/resize/920x517!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fb5%2F37%2Fa02c03d4449d8fed8b4519933720%2Fwalmart-and-netflix-logos.jpg" alt="" />
                    </div>
                </marquee>
            </div>
            <div className='h-80 mb-8 w-full py-14' style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/007/201/569/original/glitch-abstract-shape-with-gradient-purple-color-background-free-vector.jpg")` }}>
                <div className='h-48 bg-white w-3/4 mx-auto my-auto border lg:flex justify-between p-10 items-center'>
                    <h1 className='lg:text-3xl font-bold text-slate-900 w-full'>Subscribe for <br />Latest Trends & Offers</h1>
                    <div className='w-full'>
                        <form>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input style={{ color: 'black' }} type="search" id="default-search" className="block rounded-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                                <button type="submit" className="text-white rounded-none absolute right-2.5 bottom-2.5 bg-slate-800 hover:bg-slate-900 font-medium  text-sm px-4 py-2">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;