import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { BiDownArrow, BiSearch } from 'react-icons/bi';
const Shop = () => {
    const [BrandsMenu, setBrandsMenu] = useState(false)
    return (
        <div className='w-11/12 mx-auto grid lg:grid-cols-4 gap-2'>
            <div className=' h-screen'>
                <div>
                    <motion.div onClick={() => setBrandsMenu(!BrandsMenu)}><h4 className='text-lg'>Brands <BiDownArrow className='inline'></BiDownArrow></h4></motion.div>
                    <hr />
                    <AnimatePresence>
                        {BrandsMenu && (
                            <motion.div layoutId={BrandsMenu}>
                                <form>
                                    <div className="relative">
                                        <input style={{ color: 'black' }} type="search" id="default-search" className="block rounded-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Brand" required />
                                        <button type="submit" className=" text-lg rounded-none absolute right-2.5 bottom-2.5 text-black font-medium px-4 py-2"><BiSearch></BiSearch></button>
                                    </div>
                                </form>
                                <div className="form-control mt-2">
                                    <label className=" flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="checkbox checkbox-primary rounded-none" />
                                        <span className="label-text">Apple</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className=" flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="checkbox checkbox-primary rounded-none" />
                                        <span className="label-text">Samsung</span>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <label className=" flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="checkbox checkbox-primary rounded-none" />
                                        <span className="label-text">Sony</span>
                                    </label>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
            <div className='col-span-3 border '>

            </div>

        </div>
    );
};

export default Shop;