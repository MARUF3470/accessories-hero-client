import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { BiSearch } from 'react-icons/bi';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useQuery } from 'react-query';
import ShopProduct from './ShopProduct';
import QuickViewModal from './QuickViewModal';
const Shop = () => {
    const [BrandsMenu, setBrandsMenu] = useState(false)
    const [quickView, setQuickView] = useState(null)

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const result = await fetch('https://accessories-hero-server.vercel.app/products')
            const data = await result.json()
            return data
        }
    })
    return (
        <div className='w-11/12 mx-auto grid lg:grid-cols-4 gap-2 mt-10'>
            <div className='lg:h-screen'>
                <div>
                    <motion.div onClick={() => setBrandsMenu(!BrandsMenu)}><h4 className='text-lg'>Brands <AiOutlineArrowDown className='inline'></AiOutlineArrowDown></h4></motion.div>
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
            <div className='col-span-3'>
                <div className='grid grid-cols-2 lg:grid-cols-4 lg:gap-10'>
                    {
                        products?.map(product => <ShopProduct key={product._id} product={product} refetch={refetch} setQuickView={setQuickView}></ShopProduct>)
                    }
                </div>
            </div>
            <QuickViewModal quickView={quickView} setQuickView={setQuickView} refetch={refetch}></QuickViewModal>
        </div>
    );
};

export default Shop;