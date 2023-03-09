import React from 'react';
import Lottie from "lottie-react";
import musicAnimation from './musicAnimation.json'
import { BsArrowRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import Categories from '../category/Categories';
const Home = () => {
    return (
        <div>
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
            <Categories></Categories>
        </div>
    );
};

export default Home;