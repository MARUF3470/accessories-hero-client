import React from 'react';
import Lottie from "lottie-react";
import musicAnimation from './musicAnimation.json'
import { BsArrowRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import Categories from '../category/Categories';
import { useQuery } from 'react-query';
import AdvertiseProduct from './AdvertiseProduct';
import QuickViewModal from '../shop/QuickViewModal';
import { useState } from 'react';
const Home = () => {
    const [quickView, setQuickView] = useState(null)
    const { data: products = [], refetch, isError } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/products');
            const data = await result.json()
            return data
        }
    })
    const advertiseProducts = products.filter(product => product.advertise === true)
    return (
        <div>
            <div className='bg-slate-100 mb-7'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='grid lg:grid-cols-2 items-center w-11/12 mx-auto mb-5 lg:mb-0'>
                    <div>
                        <Lottie animationData={musicAnimation} loop={true} />
                    </div>
                    <div className='pl-10'>
                        <div className=' flex gap-2 items-center'>
                            <div>
                                <div className=" w-1 h-12 bg-red-600"></div>
                            </div>
                            <div className='leading-5 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent font-bold'>
                                <h6>Best Music</h6>
                                <h6>Accessoris & Gadgets</h6>
                            </div>
                        </div>
                        <h1 className='font-extrabold text-4xl lg:text-7xl mt-3 text-zinc-900'>Music To</h1>
                        <h1 className='font-extrabold text-4xl lg:text-7xl text-zinc-900'>Fill Your Heart</h1>
                        <button className='btn btn-outline hover:bg-zinc-900 border-1 border-zinc-800 rounded-none mt-4 lg:mt-10'>Shop Now <BsArrowRight className='w-5 h-5 ml-1'></BsArrowRight></button>
                    </div>
                </motion.div>
                <QuickViewModal quickView={quickView} setQuickView={setQuickView} refetch={refetch}></QuickViewModal>
            </div>
            <Categories></Categories>
            <div className='w-11/12 mx-auto my-10'>
                <div className=' flex gap-2 items-center mb-8'>
                    <div>
                        <div className=" w-1 h-12 bg-red-600"></div>
                    </div>
                    <div className='leading-5 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent font-bold'>
                        <h4 className='text-3xl font-bold text-slate-900'>Popular Products</h4>
                    </div>
                </div>
                {
                    advertiseProducts.length ? <div className='grid lg:grid-cols-4'>
                        {
                            advertiseProducts.map(advertiseProduct => <AdvertiseProduct key={advertiseProduct._id} advertiseProduct={advertiseProduct} refetch={refetch} setQuickView={setQuickView}></AdvertiseProduct>)
                        }
                    </div> : <h4 className='font-semibold text-center text-base'>No product to show</h4>
                }
                <div className="hero h-96 mt-10" style={{ backgroundImage: `url("https://www.cnet.com/a/img/resize/d99f708b1e6c7db1ffda00fc1f5d8e35ca7da558/hub/2022/10/05/c29087ff-e885-4668-8cde-8de5a609f716/apple-iphone-14-pro-cnet-promo-11.jpg?auto=webp&fit=crop&height=675&width=1200")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold">Want To Have The New Iphone?</h1>
                            <p className="mb-5">Visit our store to get the lestest phone and be the first user</p>
                            <button className='btn  hover:bg-zinc-900 border-zinc-800 rounded-none mt-4 lg:mt-10'>Shop Now <BsArrowRight className='w-5 h-5 ml-1'></BsArrowRight></button>
                        </div>
                    </div>
                </div>
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

export default Home;