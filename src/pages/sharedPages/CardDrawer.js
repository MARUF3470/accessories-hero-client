import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion } from "framer-motion"
const CardDrawer = () => {
    return (
        <div className="drawer-side rounded-sm ">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu w-96 bg-base-100 text-base-content">
                <div className='border flex justify-between items-center py-3 shadow-md px-4'>
                    <h5 className='font-semibold'>SHOPPING CART</h5>
                    <motion.label whileHover={{ rotate: 90 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }} htmlFor="my-drawer-4" className="drawer-button"><IoMdClose className='w-8 h-8'></IoMdClose></motion.label>
                </div>
                <h1>lorem500</h1>
            </ul>
        </div>
    );
};
export default CardDrawer;